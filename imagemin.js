const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
imagemin(['dist/images/*.{jpg,png,gif,svg}'], 'output/images', {
  plugins: [
    imageminMozjpeg({
      quality: 80
    }),
    imageminPngquant({
      quality: '65-80'
    }),
    imageminGifsicle(),
    imageminSvgo()
  ]
}).then(() => {
  console.log('Images optimized');
});