const terseCssr = require('./utils/terse-cssr.js')

module.exports = () => {
  return {
    name: 'css-render-vite',
    transform (src, id) {
      if (id.endsWith('.cssr.ts') || id.endsWith('.cssr.js')) {
        return terseCssr(src)
      }
    }
  }
}
