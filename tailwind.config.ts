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
                grey: {
                    1: "#F3F4F5",
                    2: "#F0F1F3",
                    3: "#E5E7E9",
                    4: "#D0D5DD",
                    5: "#9EA8B3",
                    "5_50P": "#9EA8B380",
                    6: "#737C8D",
                    7: "#142132",
                },
                blue: { 2: "#1D3D5E" },
                error: { 1: "#F6D5D6", 2: "#D12E34" },
                success: { 2: "#317D35" },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                mono: ["var(--font-geist-mono)"],
            },
            fontSize: {
                "3xl": "1.75rem",
            },
            backgroundImage: {
                MotiMateLogo: "url('/illustrations/vectors/MotiMateLogo.svg')",
                MotiMateLogoWithName:
                    "url('/illustrations/vectors/MotiMateLogoWithName.svg')",
            },
        },
    },
    plugins: [],
} satisfies Config;
