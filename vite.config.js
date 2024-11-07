// import { defineConfig } from 'vite';
// import { resolve } from 'path';
// import { createHtmlPlugin } from 'vite-plugin-html';

// export default defineConfig({
//    // plugins: [
//    //    createHtmlPlugin({
//    //       minify: true,
//    //       pages: [
//    //          {
//    //             filename: 'index.html',
//    //             template: 'index.html',
//    //          },
//    //          {
//    //             filename: 'about.html',
//    //             template: 'about.html',
//    //          },
//    //       ],
//    //    }),
//    // ],
//    // css: {
//    //    preprocessorOptions: {
//    //       scss: {
//    //          additionalData: `@import "./src/styles/style.scss";`,
//    //       },
//    //    },
//    // },
//    build: {
//       rollupOptions: {
//          input: {
//             main: resolve(__dirname, 'index.html'),
//             about: resolve(__dirname, 'aboutPage.html'),
//             cancel: resolve(__dirname, 'cancelPage.html'),
//             paymentInfo: resolve(__dirname, 'paymentInfoPage.html'),
//             delivery: resolve(__dirname, 'deliveryPage.html'),
//             size: resolve(__dirname, 'sizePage.html'),
//          },
//       },
//    },
// });

import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
   // Основной путь для проекта
   base: './',

   // Настройки для сервера разработки
   server: {
      port: 3000, // Порт сервера
      open: true, // Автоматическое открытие браузера
      hot: true, // Включение горячей перезагрузки (HMR)
   },

   // Настройки для сборки
   build: {
      outDir: 'dist/', // Папка для собранных файлов
      rollupOptions: {
         input: {
            main: path.resolve(__dirname, 'index.html'), // Указываем главный HTML файл
         },
      },
   },

   // Дополнительные настройки
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: '@import "./src/styles/style.scss";', // Импорт переменных SCSS
         },
      },
   },

   // Настройки плагинов, если используются
   plugins: [
      // Например, плагин для Vue (если нужен):
      // vue(),
   ],
});
