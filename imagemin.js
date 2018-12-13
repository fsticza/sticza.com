const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')

let files
;(async () => {
  files = await imagemin(['assets/img/*.{jpg,png}'], 'assets/img', {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
  })
  console.log(files)
})()

module.exports = files
