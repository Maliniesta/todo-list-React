import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/Maliniesta/todo-list-React.git",
  plugins: [react(), tailwindcss()],
});
