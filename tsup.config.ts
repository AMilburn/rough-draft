import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/components/index.ts"],
    outDir: "dist",
    format: ["esm", "cjs"],
    dts: {
        compilerOptions: {
            incremental: false,
        },
    },
    splitting: false,
    sourcemap: true,
    clean: true,
    // Bundle CSS Modules into a single dist/index.css
    injectStyle: false,
    external: ["react", "react-dom"],
    esbuildOptions(options) {
        options.jsx = "automatic";
    },
    banner: {
        js: '"use client";',
    },
});
