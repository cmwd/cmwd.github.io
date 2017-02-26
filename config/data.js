var marked = require('meta-marked');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

const DATE_FORMAT = 'MM-YYYY';

function dateComparation(a, b) {
  return (Date.now() - a.start) - (Date.now() - b.start);
}

function readDataFile(dataDir, fileName) {
  const content = fs.readFileSync(path.resolve(dataDir, fileName));
  const file = marked(content.toString());

  const extraProps = {};

  if (file.meta.category) {
    Object.assign(extraProps, {
      categoryId: _.snakeCase(file.meta.category),
    });
  }

  ['end', 'start'].forEach(key => {
    if (file.meta[key]) {
      Object.assign(extraProps, {[key]: Date.parse(file.meta[key])});
    }
  });

  return Object.assign({}, file.meta, extraProps, {
    fileName: fileName,
    content: {
      html: file.html,
    },
  });
}

module.exports = function(dataDir) {
  let categories = {};
  const files = fs.readdirSync(dataDir)
    .map((fileName) => {
      const file = readDataFile(dataDir, fileName);
      const {
        categoryId,
        category,
        order = 0,
      } = file;

      if (categoryId) {
        categories[categoryId] = {
          categoryId,
          name: category,
          order: order,
        };
      }

      return file;
    })
    .sort(dateComparation);

  categories = Object
    .keys(categories)
    .map(key => categories[key])
    .sort((a, b) => a.order - b.order);

  return { files, categories };
};

