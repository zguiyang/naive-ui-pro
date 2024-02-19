const createVuePlugin = require('@vitejs/plugin-vue')
const getTransformedVueSrc = require('./utils/get-demo-by-path.js')
const createCssrPlugin = require('./vite-plugin-css-render.js')
const siteIndexTransFormPlugin = require('./vite-plugin-index-tranform.js')

const fileRegex = /\.(md|entry)$/

const vuePlugin = createVuePlugin({
  include: [/\.vue$/, /\.md$/, /\.entry$/]
})

const createDemoPlugin = () => {
  const naiveDemoVitePlugin = {
    name: 'demo-vite',
    transform (_, id) {
      if (fileRegex.test(id)) {
        return getTransformedVueSrc(id)
      }
    },
    async handleHotUpdate (ctx) {
      const { file } = ctx
      if (fileRegex.test(file)) {
        const code = await getTransformedVueSrc(file)
        return vuePlugin.handleHotUpdate({
          ...ctx,
          read: () => code
        })
      }
    }
  }

  const cssrPlugin = createCssrPlugin()

  return [siteIndexTransFormPlugin, naiveDemoVitePlugin, vuePlugin, cssrPlugin]
}

module.exports = createDemoPlugin