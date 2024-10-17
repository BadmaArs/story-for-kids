import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            "@": path.resolve("src"),
            "@widgets": path.resolve("src/widgets"),
            "@features": path.resolve("src/features"),
            "@entities": path.resolve("src/entities"),
        },
    },
});
