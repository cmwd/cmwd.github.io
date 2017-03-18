const marked = require('meta-marked');
const fs = require('fs');
const path = require('path');

const DEFAULT_DATE_FORMAT = 'MM-YYYY';

function getEntitieDetails(entitiePath, name) {
  const content = fs.readFileSync(entitiePath).toString();
  const { meta, html } = marked(content);
  const prefix = parseInt(name.split('_')[0], 10);
  const optionalValues = {};

  if (isNaN(prefix)) {
      throw new Error(`Entity prefix is not a number: ${name}`);
  }

  if (meta.start) {
    optionalValues.start = Date.parse(meta.start);
  }

  if (meta.end) {
    optionalValues.end = Date.parse(meta.end);
  }

  const file = {
    name,
    prefix,
  };

  return Object.assign({ content: html, file }, meta, optionalValues);
}

function getCategoryDetails(descriptorPath) {
  const content = fs.readFileSync(descriptorPath).toString();
  const { meta } = marked(content);

  return Object.assign({
    dateFormat: DEFAULT_DATE_FORMAT,
  }, meta);
}

function readDataDir(startDir) {
  const result = {};

  return fs
    .readdirSync(startDir)
    .reduce((memo, item) => {
      const itemPath = path.resolve(startDir, item);
      const isMarkdownFile = path.extname(item) === '.md';
      const isCategoryDescriptor = isMarkdownFile
        && item.startsWith('category-descriptor');

      Object.assign(memo, { entities: memo.entities || [] });

      if (isCategoryDescriptor) {
        Object.assign(memo, getCategoryDetails(itemPath));
      }

      if (!isCategoryDescriptor && isMarkdownFile) {
        memo.entities = [getEntitieDetails(itemPath, item), ...memo.entities];
      } else if (fs.statSync(itemPath).isDirectory()) {
        Object.assign(memo, { [item]: readDataDir(itemPath) });
      }

      return memo;
    }, {});
}

module.exports = { readDataDir, getEntitieDetails, getCategoryDetails };
