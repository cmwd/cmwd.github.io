const path = require('path');
const DataManager = require('../data-manager');

const dataDir = path.resolve(__dirname, 'test-data', 'section');

describe('Entitie', () => {
  it('should match snapshoted object', () => {
    const entitie = DataManager
      .getEntitieDetails(
        `${dataDir}/section-one/03212017_section.md`, '123_section.md');

    expect(entitie.file.name).toBe('123_section.md');
    expect(entitie).toMatchSnapshot();
  });

  it('should normalize date', () => {
    const entitie = DataManager
      .getEntitieDetails(
        `${dataDir}/section-one/03212017_section.md`, '123_section.md');

    expect(entitie.start).toBe(1490050800000);
    expect(entitie.end).toBe(1492725600000);

  });

  it('should throw an error if entity name does not have a number', () => {
    const incorrectEntitie = () => {
      const entitie = DataManager
        .getEntitieDetails(
          `${dataDir}/section-one/03212017_section.md`, 'section.md');
    };

    expect(incorrectEntitie).toThrowErrorMatchingSnapshot();
  });

});

it('Should create category description object', () => {
  const category = DataManager
    .getCategoryDetails(`${dataDir}/section-one/category-descriptor.md`);

  expect(category).toMatchSnapshot();
});

it('Should traverse directories tree', () => {
  const tree = DataManager.readDataDir(dataDir);

  expect(tree).toMatchSnapshot();
});

it('Should sort entities from biggest to lower prefix', () => {
  const tree = DataManager.readDataDir(dataDir);
  const [positionOne, positionTwo] = tree['section-one'].entities;

  expect(positionOne.name).toBe('first-position');
  expect(positionTwo.name).toBe('second-position');
})

