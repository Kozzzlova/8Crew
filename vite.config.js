import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
   // plugins: [
   //    createHtmlPlugin({
   //       minify: true,
   //       pages: [
   //          {
   //             filename: 'index.html',
   //             template: 'index.html',
   //          },
   //          {
   //             filename: 'about.html',
   //             template: 'about.html',
   //          },
   //       ],
   //    }),
   // ],
   // css: {
   //    preprocessorOptions: {
   //       scss: {
   //          additionalData: `@import "./src/styles/style.scss";`,
   //       },
   //    },
   // },
   build: {
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'index.html'),
            about: resolve(__dirname, 'aboutPage.html'),
            about: resolve(__dirname, 'cancelPage.html'),
            about: resolve(__dirname, 'paymentInfoPage.html'),
         },
      },
      server: {
         fs: {
            allow: ['about.html'], // разрешить доступ к другим HTML-файлам
         },
      },
   },
});
