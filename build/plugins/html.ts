
import type { Plugin } from 'vite';
import html from 'vite-plugin-html';

 export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
   const { VITE_GLOB_APP_TITLE } = env;


   const htmlPlugin: Plugin[] = html({
     minify: isBuild,
     inject: {
       data: {
        title: VITE_GLOB_APP_TITLE,
       },
     },
   });
   return htmlPlugin;
 }