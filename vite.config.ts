import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteImagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate' }),
    viteImagemin({
      gifsicle: {
        // gif图片压缩
        optimizationLevel: 3, // 选择1到3之间的优化级别
        interlaced: false // 隔行扫描gif进行渐进式渲染
        // colors: 2 // 将每个输出GIF中不同颜色的数量减少到num或更少。数字必须介于2和256之间。
      },
      optipng: {
        // png
        optimizationLevel: 7 // 选择0到7之间的优化级别
      },
      mozjpeg: {
        // jpeg
        quality: 20 // 压缩质量，范围从0(最差)到100(最佳)。
      },
      pngquant: {
        // png
        quality: [0.6, 0.8], // Min和max是介于0(最差)到1(最佳)之间的数字，类似于JPEG。达到或超过最高质量所需的最少量的颜色。如果转换导致质量低于最低质量，图像将不会被保存。
        speed: 4 // 压缩速度，1(强力)到11(最快)
      },
      svgo: {
        // svg压缩
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
