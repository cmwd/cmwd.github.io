// @flow

const marked = require('meta-marked');
const fs = require('fs');
const path = require('path');

const DEFAULT_DATE_FORMAT = 'MM-YYYY';

/*::
  export type Entity = {
    [key: string]: Object
  };
*/

function getEntitieDetails(entityPath )/*: Entity */ {
  const { meta, html, markdown } = marked(fs.readFileSync(entityPath).toString());
  const optionalValues = {};
  const { start, end }/*: { start?: string, end?: string} */ = meta;

  if (start) {
    optionalValues.start = Date.parse(start);
  }

  if (end) {
    optionalValues.end = Date.parse(end);
  }

  return Object.assign({ content: html, markdown }, meta, optionalValues);
}

function slugify(value/*: string */)/*: string */ {
  return value
    .replace('.md', '')
    .replace(/([\.\s\-\_].)/g, (value) => value[1].toUpperCase());
}

function readDataDir(startDir/*: string */)/*: Entity */ {
  return fs
    .readdirSync(startDir)
    .reduce((memo, entity) => {
      const entityPath = path.resolve(startDir, entity);
      const stat = fs.statSync(entityPath);

      if (stat.isDirectory()) {
        Object.assign(memo, {
          [slugify(entity)]: readDataDir(entityPath),
        });
      }

      if (stat.isFile() && path.extname(entity) === '.md') {
        Object.assign(memo, {
          [slugify(entity)]: getEntitieDetails(entityPath),
        });
      }

      return memo;
    }, {});
}

module.exports = { readDataDir, getEntitieDetails };
