const path = require('path');
const DataManager = require('../data-manager');

const dataDir = path.resolve(__dirname, 'test-data', 'section');

it('Should create an entitie description object', () => {
  const entitie = DataManager
    .getEntitieDetails(`${dataDir}/section-one/section.md`, 'section.md');

  expect(entitie.name).toBe('section.md');
  expect(entitie).toMatchSnapshot();
});
