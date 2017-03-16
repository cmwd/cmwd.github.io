var marked = require('meta-marked');
var fs = require('fs');
var path = require('path');

function getEntitieDetails(entitiePath, name) {
  const content = fs.readFileSync(entitiePath).toString();
  const { meta, html } = marked(content);

  return { name, meta, content: html };
}

function traverseDirectoryTree(startDir) {
  const result = {};

  return fs
    .readdirSync(startDir)
    .reduce((memo, item) => {
      const itemPath = path.resolve(startDir, item);
      const isMarkdownFile = path.extname(item) === '.md';

      if (isMarkdownFile) {
        Object.assign(memo, { entities: memo.entities || [] });
        memo.entities.push(getEntitieDetails(itemPath, item));
      } else if (fs.statSync(itemPath).isDirectory()) {
        memo[item] = traverseDirectoryTree(itemPath);
      }

      return memo;
    }, {});
}

function readDataDir(dataDir) {
  return traverseDirectoryTree(dataDir);
}

module.exports = { readDataDir, getEntitieDetails };
