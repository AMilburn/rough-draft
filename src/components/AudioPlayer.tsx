"use client";

import { useRef, useState, useEffect, ChangeEvent } from "react";

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

export default function AudioPlayer({
    src,
    title,
    subtitle,
    className = "",
}: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.3);
    const [isMuted, setIsMuted] = useState(false);
    const [speedIndex, setSpeedIndex] = useState(2); // default 1x
    const [isDragging, setIsDragging] = useState(false);

    const speed = SPEEDS[speedIndex];

    // Sync audio element
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onTimeUpdate = () => {
            if (!isDragging) setCurrentTime(audio.currentTime);
        };
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

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.playbackRate = speed;
    }, [speed]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = isMuted ? 0 : volume;
    }, [volume, isMuted]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
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

    const cycleSpeed = () => {
        setSpeedIndex((i) => (i + 1) % SPEEDS.length);
    };

    const skip = (seconds: number) => {
        const audio = audioRef.current;
        if (!audio) return;
        const next = Math.max(0, Math.min(audio.currentTime + seconds, duration));
        audio.currentTime = next;
        setCurrentTime(next);
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div
            className={`border-3 border-black dark:border-white bg-white dark:bg-[#1a1a1a] shadow-[6px_6px_0px_0px_#ff4444] ${className}`}
        >
            <audio ref={audioRef} src={src} preload="metadata" />

            {/* Header */}
            {(title || subtitle) && (
                <div className="px-6 pt-6 pb-4 border-b-3 border-black dark:border-white">
                    {title && (
                        <p
                            className="text-base font-bold text-black dark:text-white uppercase truncate"
                            style={{ fontFamily: "var(--font-marker)" }}
                        >
                            {title}
                        </p>
                    )}
                    {subtitle && (
                        <p
                            className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] mt-0.5 truncate"
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            )}

            <div className="px-6 py-5 space-y-4">
                {/* Scrub bar */}
                <div className="space-y-1">
                    <div className="relative w-full h-3 bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20">
                        {/* Fill */}
                        <div
                            className="absolute top-0 left-0 h-full bg-[#ff4444] pointer-events-none"
                            style={{ width: `${progress}%` }}
                        />
                        <input
                            type="range"
                            min={0}
                            max={duration || 0}
                            step={0.1}
                            value={currentTime}
                            onChange={handleScrub}
                            onMouseDown={() => setIsDragging(true)}
                            onMouseUp={() => setIsDragging(false)}
                            onTouchStart={() => setIsDragging(true)}
                            onTouchEnd={() => setIsDragging(false)}
                            aria-label="Seek"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    </div>
                    <div className="flex justify-between">
                        <span
                            className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]"
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            {formatTime(currentTime)}
                        </span>
                        <span
                            className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]"
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between gap-2">
                    {/* Left: skip back + play/pause + skip forward */}
                    <div className="flex items-center gap-3">
                        {/* Skip back 10s */}
                        <button
                            onClick={() => skip(-10)}
                            aria-label="Rewind 10 seconds"
                            className="text-black dark:text-white hover:text-[#ff4444] transition-colors"
                        >
                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="1 4 1 10 7 10" />
                                <path d="M3.51 15a9 9 0 1 0 .49-3.51" />
                                <text x="7" y="15" fontSize="6" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">10</text>
                            </svg>
                        </button>

                        {/* Play / Pause */}
                        <button
                            onClick={togglePlay}
                            aria-label={isPlaying ? "Pause" : "Play"}
                            className="
                w-12 h-12 flex items-center justify-center
                bg-black dark:bg-white text-white dark:text-black
                border-3 border-black dark:border-white
                hover:shadow-[4px_4px_0px_0px_#ff4444]
                hover:translate-x-0.5 hover:translate-y-0.5
                transition-all
              "
                        >
                            {isPlaying ? (
                                // Pause icon
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="16" />
                                    <rect x="14" y="4" width="4" height="16" />
                                </svg>
                            ) : (
                                // Play icon
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            )}
                        </button>

                        {/* Skip forward 10s */}
                        <button
                            onClick={() => skip(10)}
                            aria-label="Forward 10 seconds"
                            className="text-black dark:text-white hover:text-[#ff4444] transition-colors"
                        >
                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="23 4 23 10 17 10" />
                                <path d="M20.49 15a9 9 0 1 1-.49-3.51" />
                                <text x="7" y="15" fontSize="6" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">10</text>
                            </svg>
                        </button>
                    </div>

                    {/* Right: speed + volume */}
                    <div className="flex items-center gap-3">
                        {/* Playback speed */}
                        <button
                            onClick={cycleSpeed}
                            aria-label={`Playback speed: ${speed}x`}
                            className="
                px-2 py-1 text-xs font-bold border-2 border-black dark:border-white
                text-black dark:text-white
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                transition-all uppercase
              "
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            {speed}×
                        </button>

                        {/* Mute toggle */}
                        <button
                            onClick={() => setIsMuted((m) => !m)}
                            aria-label={isMuted ? "Unmute" : "Mute"}
                            className="text-black dark:text-white hover:text-[#ff4444] transition-colors"
                        >
                            {isMuted || volume === 0 ? (
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                    <line x1="23" y1="9" x2="17" y2="15" />
                                    <line x1="17" y1="9" x2="23" y2="15" />
                                </svg>
                            ) : (
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                </svg>
                            )}
                        </button>

                        {/* Volume slider */}
                        <div className="relative w-20 h-2 bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20">
                            <div
                                className="absolute top-0 left-0 h-full bg-black dark:bg-white pointer-events-none"
                                style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                            />
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                aria-label="Volume"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
