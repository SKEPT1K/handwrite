const Handwrite = require('../src/Handwrite');

const options = {
  username: 'email',
  password: 'password',
  planId: 'uuid',
  development: true
};

handwrite = new Handwrite(options);

console.log(handwrite, ':: Handwrite Client ::');

console.log(':: Sending Test Card ::');

const card = {
  firstname: 'TJ',
  lastname: 'Miller',
  street1: '123 Main St',
  city: 'Los Angeles',
  region: 'CA',
  postcode: '54321',
  senderFirstname: 'Chris',
  senderLastname: 'D\'Elia',
  senderStreet1: '321 Maple St',
  senderCity: 'Los Angeles',
  senderRegion: 'CA',
  senderPostcode: '12345',
  message: 'Test Message',
  hw: 'hw_PQMx89Kr2mI0p8',
  card: 'card_PQ5zl2LfaXl5xm'
};

handwrite.send(card, function(err, res, body) {
  console.log(body, ':: Response Body ::');
});
