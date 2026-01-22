import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: '#1e5a7e',
                    light: '#2d7ba8',
                    dark: '#0f3d5a',
                },
                accent: {
                    gold: '#d4af37',
                    green: '#2ecc71',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
