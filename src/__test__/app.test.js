import React from 'react';
import { render } from 'enzyme';
import App from '../app';

it('should render sidebar', function() {
  let app = render(<App />);

  expect(app.find('.app__sidebar').length).toBe(0);
  app = render(
    <App
      files={[{ layout: 'sidebar' }]}
    />);
  expect(app.find('.app__sidebar').length).toBe(1);
});

it('should render single section with multiple position components',
  function() {
    const files = [
      {
        layout: 'position',
        categoryId: 'test',
        fileName: 'a',
      },
      {
        layout: 'position',
        categoryId: 'test',
        fileName: 'b',
      }
    ];
    const categories = [{ name: 'Test', categoryId: 'test' }];
    const app = render(
      <App
        files={files}
        categories={categories}
      />);

    expect(app.find('.content__section').length).toBe(1);
    expect(app.find('.content__position').length).toBe(2);
  });

it('should render list component', function() {
  const files = [
    {
      layout: 'list',
      categoryId: 'test',
      fileName: 'a',
    },
  ];
  const categories = [{ name: 'Test', categoryId: 'test' }];
  const app = render(<App files={files} categories={categories} />);
  
  expect(app.find('.content__list').length).toBe(1);
});

it('should fallback to section component if layout is unknown',
  function() {
    const files = [
      {
        layout: 'unknown',
        categoryId: 'test',
        fileName: 'a',
      }
    ];
    const categories = [{ name: 'Test', categoryId: 'test' }];
    const app = render(
      <App
          files={files}
          categories={categories}
      />);

    expect(app.find('.content__section').length).toBe(2);
  });

