const mongoose = require('mongoose');
const Paragraph = require('../models/paragraph');


describe('Paragraph', () => {
  it('has a text field', async done => {
    const para = new Paragraph({
      text: 'This is a paragraph'
    });
    await para.save();

    const p = await Paragraph.findOne({});
    expect(p.text).toBe('This is a paragraph');
    done();
  });
});

//
// test('contains a list of markups', done => {
//   Paragraph.findOne({})
//     .then(p => {
//       const m = {
//         mark: 'a',
//         start: 48,
//         end: 56
//       };
//       p.markups.push(m);
//
//       expect(p.markups.length).toBe(1);
//       done();
//     });
// });
