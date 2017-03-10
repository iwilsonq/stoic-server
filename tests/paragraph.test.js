const Paragraph = require('../models/paragraph');

beforeEach(() => {

});

test('Paragraph has the term markup', () => {
  const p = new Paragraph({
    text: 'I am the first paragraph. Behold my beautiful markup among other features',
  });

  const m = {
    mark: 'strong',
    start: 48,
    end: 57
  };

  console.log(p.markups);
  p.markups.push(m);
  console.log(p.markups);

  expect(p.text).toMatch(/markup/);
});
