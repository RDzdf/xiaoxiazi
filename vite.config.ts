import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { resolve } from "path"
import path from "path"
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// svg plugin
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// mock
import { viteMockServe } from "vite-plugin-mock";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		createSvgIconsPlugin({
		  // 指定需要缓存的图标文件夹
		  iconDirs: [ path.resolve(__dirname, './src/assets/svg') ],
		}),
        viteMockServe({
            mockPath: "mock",//设置mock文件存储目录
            localEnabled: true,//设置是否启用本地mock文件
            prodEnabled: true,//设置打包是否启用 mock 功能
            watchFiles: true,//设置是否监视mockPath对应的文件夹内文件中的更改
            injectCode: `
              import { setupProdMockServer } from './mockProdServer';
              setupProdMockServer();
            `,//如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.{ts,js}
            logger: true,//是否在控制台显示请求日志
        }),
		vue(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
})
