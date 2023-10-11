import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", //
      "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   plugins: [],
   theme: {
      extend: {
         colors: {
            overlay: "#0e0e0e94",
            white: "white",
            error: "red",
            primary: "#006BFF",
            "theme-level-1": "var(--theme-level-1)",
            "theme-level-2": "var(--theme-level-2)",
            "theme-level-3": "var(--theme-level-3)",
            "theme-level-4": "var(--theme-level-4)",
            "theme-level-5": "var(--theme-level-5)",
         },
      },
   },
};
export default config;
