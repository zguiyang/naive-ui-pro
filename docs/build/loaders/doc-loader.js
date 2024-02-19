const convertMd2Doc = require('./convert-md-to-doc.js')
const projectPath = require('./project-path.js')

module.exports = async function (content, path) {
  const env = process.env.NODE_ENV
  const relativeUrl = path.replace(projectPath + '/', '')
  return convertMd2Doc(content, relativeUrl, env)
}
