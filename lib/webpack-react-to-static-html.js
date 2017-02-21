const vm = require('vm');

class ReactToStaticHtml {
  apply(compiler) {
    compiler.plugin('compilation', (compilation) => {
      compilation.plugin(
        'html-webpack-plugin-before-html-processing',
        (data, next) => {
          const staticChunk = compilation.namedChunks.static;

          if (staticChunk) {
            const fileName = staticChunk.files[0];
            const asset = compilation.assets[fileName];
            const page = new vm.Script(asset.source()).runInThisContext();

            staticChunk.files
              .forEach(file => {
                delete compilation.assets[file];
              });

            data.html = data.html.replace('<!--render-here-->', page);
          }

          next(null, data);
        });
    });
  }
}

module.exports = ReactToStaticHtml;
