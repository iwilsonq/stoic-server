const mongoose = require('mongoose');
const Paragraph = require('../models/paragraph');


beforeAll(done => {
  initializeTestDatabase();
  const { paragraphs } = mongoose.connection.collections;
  paragraphs.drop(() => done());
});

describe('Paragraph', () => {
  beforeEach(done => {
    const p = new Paragraph({
      text: 'I am a paragraph'
    });

    const m = {
      mark: 'a',
      start: 48,
      end: 56
    };

    p.markups.push(m);

    console.log(p);

    p.save().then(() => done());
  });

  test('exists on creation', done => {
    Paragraph.findOne({})
      .then(p => {
        console.log(p);
        expect(p).toBeDefined();
        done();
      });
  });
  test('has a list of markups', () => {

  });
})

function initializeTestDatabase() {
  mongoose.connect('mongodb://localhost/stoic');
  mongoose.connection
    .once('open', () => {
      console.log('Connected to MongoDB');
    })
    .on('error', error => {
      console.warn('Warning', error);
    });
}
