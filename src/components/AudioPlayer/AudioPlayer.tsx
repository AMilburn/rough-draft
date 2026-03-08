"use client";

import { useRef, useState, useEffect, ChangeEvent } from "react";
import styles from "./AudioPlayer.module.css";

interface AudioPlayerProps {
    src: string;
    title?: string;
    subtitle?: string;
    className?: string;
}

function formatTime(seconds: number): string {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

export default function AudioPlayer({ src, title, subtitle, className = "" }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.3);
    const [isMuted, setIsMuted] = useState(false);
    const [speedIndex, setSpeedIndex] = useState(2);
    const [isDragging, setIsDragging] = useState(false);

    const speed = SPEEDS[speedIndex];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const onTimeUpdate = () => { if (!isDragging) setCurrentTime(audio.currentTime); };
        const onDurationChange = () => setDuration(audio.duration);
        const onEnded = () => setIsPlaying(false);
        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("durationchange", onDurationChange);
        audio.addEventListener("loadedmetadata", onDurationChange);
        audio.addEventListener("ended", onEnded);
        return () => {
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audio.removeEventListener("durationchange", onDurationChange);
            audio.removeEventListener("loadedmetadata", onDurationChange);
            audio.removeEventListener("ended", onEnded);
        };
    }, [isDragging]);

    useEffect(() => { if (audioRef.current) audioRef.current.playbackRate = speed; }, [speed]);
    useEffect(() => { if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume; }, [volume, isMuted]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        isPlaying ? audio.pause() : audio.play();
        setIsPlaying(!isPlaying);
    };

    const handleScrub = (e: ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setCurrentTime(time);
        if (audioRef.current) audioRef.current.currentTime = time;
    };

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const v = parseFloat(e.target.value);
        setVolume(v);
        setIsMuted(v === 0);
    };

    const cycleSpeed = () => setSpeedIndex((i) => (i + 1) % SPEEDS.length);

    const skip = (seconds: number) => {
        const audio = audioRef.current;
        if (!audio) return;
        const next = Math.max(0, Math.min(audio.currentTime + seconds, duration));
        audio.currentTime = next;
        setCurrentTime(next);
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className={[styles.player, className].filter(Boolean).join(" ")}>
            <audio ref={audioRef} src={src} preload="metadata" />

            {(title || subtitle) && (
                <div className={styles.header}>
                    {title && <p className={styles.title}>{title}</p>}
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
            )}

            <div className={styles.body}>
                {/* Scrub bar */}
                <div className={styles["scrub-wrap"]}>
                    <div className={styles["scrub-track"]}>
                        <div className={styles["scrub-fill"]} style={{ width: `${progress}%` }} />
                        <input
                            type="range" min={0} max={duration || 0} step={0.1} value={currentTime}
                            onChange={handleScrub}
                            onMouseDown={() => setIsDragging(true)} onMouseUp={() => setIsDragging(false)}
                            onTouchStart={() => setIsDragging(true)} onTouchEnd={() => setIsDragging(false)}
                            aria-label="Seek" className={styles["scrub-input"]}
                        />
                    </div>
                    <div className={styles["time-row"]}>
                        <span className={styles.time}>{formatTime(currentTime)}</span>
                        <span className={styles.time}>{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Controls */}
                <div className={styles.controls}>
                    <div className={styles["ctrl-left"]}>
                        <button onClick={() => skip(-10)} aria-label="Rewind 10 seconds" className={styles["icon-btn"]}>
                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="1 4 1 10 7 10" />
                                <path d="M3.51 15a9 9 0 1 0 .49-3.51" />
                                <text x="7" y="15" fontSize="6" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">10</text>
                            </svg>
                        </button>

                        <button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"} className={styles["play-btn"]}>
                            {isPlaying ? (
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
                                </svg>
                            ) : (
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            )}
                        </button>

                        <button onClick={() => skip(10)} aria-label="Forward 10 seconds" className={styles["icon-btn"]}>
                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="23 4 23 10 17 10" />
                                <path d="M20.49 15a9 9 0 1 1-.49-3.51" />
                                <text x="7" y="15" fontSize="6" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">10</text>
                            </svg>
                        </button>
                    </div>

                    <div className={styles["ctrl-right"]}>
                        <button onClick={cycleSpeed} aria-label={`Playback speed: ${speed}x`} className={styles["speed-btn"]}>
                            {speed}×
                        </button>

                        <button onClick={() => setIsMuted((m) => !m)} aria-label={isMuted ? "Unmute" : "Mute"} className={styles["icon-btn"]}>
                            {isMuted || volume === 0 ? (
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                    <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
                                </svg>
                            ) : (
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                </svg>
                            )}
                        </button>

                        <div className={styles["vol-track"]}>
                            <div className={styles["vol-fill"]} style={{ width: `${isMuted ? 0 : volume * 100}%` }} />
                            <input
                                type="range" min={0} max={1} step={0.01} value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange} aria-label="Volume" className={styles["vol-input"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
