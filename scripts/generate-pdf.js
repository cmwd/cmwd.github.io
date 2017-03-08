const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');

const paths = require('../config/paths');
const data = require('../static-data');

const options = {
  format: "A4",
  border: {
    top: '1cm',
  },
  footer: {
    height: '1.5cm',
    contents: {
      last: `
        <div class="container">
          <div class="content__section ui--text ui__text-block ui__text-block--secondary">
            ${data.privacyPolicy}
          </div>
        </div>
      `
    }
  }
};
const entryPoint = path.resolve(paths.appBuild, 'index.html');
const output = path.resolve(paths.appBuild, 'cv.pdf');
const html = fs.readFileSync(entryPoint, 'utf-8');

pdf.create(html, options).toFile(output, (err, res) => {
  if (err) {
    console.error(err);
    process.exitCode = 1;
  } else {
    console.log(res);
  }
});
