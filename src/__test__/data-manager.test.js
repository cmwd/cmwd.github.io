const path = require('path');
const DataManager = require('../data-manager');

const dataDir = path.resolve(__dirname, 'test-data', 'section');

describe('Entitie', () => {
  it('should match snapshoted object', () => {
    const entity = DataManager
      .getEntitieDetails(
        `${dataDir}/section-one/03212017_section.md`, '123_section.md');

    expect(entity).toMatchSnapshot();
  });

  it('should normalize date', () => {
    const entity = DataManager
      .getEntitieDetails(
        `${dataDir}/section-one/03212017_section.md`, '123_section.md');

    expect(entity.start).toBe(1490050800000);
    expect(entity.end).toBe(1492725600000);

  });
});

describe('Traverse directories tree', () => {
  it('should match snapshot', () => {
    const tree = DataManager.readDataDir(dataDir);

    console.log(JSON.stringify(tree, null, 2));
    expect(tree).toMatchSnapshot();
  });
});
