import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import path from "path";
import { defineConfig } from "vite";
import glob from "fast-glob";
import { fileURLToPath } from "url";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  base: "/",
  plugins: [
    ViteImageOptimizer({
      png: { quality: 86 },
      jpeg: { quality: 86 },
      jpg: { quality: 86 },
    }),
    {
      ...imagemin(["./src/img/**/*.{jpg,png,jpeg}"], {
        destination: "./src/img/webp/",
        plugins: [imageminWebp({ quality: 86 })],
      }),
      apply: "serve",
    },
  ],
  build: {
    minify: false,
    cssCodeSplit: true, // стили в отдельные .css
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(["./*.html", "./pages/**/*.html", "./src/**/*.js"])
          .map((file) => {
            const name = path.basename(file, path.extname(file));
            return [name, fileURLToPath(new URL(file, import.meta.url))];
          })
      ),
      output: {
        // JS-файлы в dist/js/ без вложенных папок
        entryFileNames: "js/[name].js",
        chunkFileNames: "js/[name]-[hash].js",
        // CSS, картинки и шрифты
        assetFileNames: ({ name }) => {
          if (!name) return "[name].[ext]";
          if (name.endsWith(".css")) return "css/[name].[ext]";
          if (/\.(png|jpe?g|gif|webp|svg)$/.test(name)) return "img/[name].[ext]";
          if (/\.(woff2?|ttf|otf|eot)$/.test(name)) return "fonts/[name].[ext]";
          return "[name].[ext]";
        },
      },
    },
  },
});
