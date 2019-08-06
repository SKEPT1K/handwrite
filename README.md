# handwrite
Javascript wrapper for Handwrite.io API

## Quick Setup
1. Clone the repo: `git clone https://github.com/SKEPT1K/handwrite.git`
2. Require the library in your code: `const Handwrite = require('../src/Handwrite');`
3. Initialize the `handwrite` client: 
```
const options = {
  username: 'email',
  password: 'password',
  planId: 'uuid',
  development: true
};

handwrite = new Handwrite(options);
```
4. Create and send a test:
```
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
  // Do stuff...
});
```

## Examples
- [testsingle.js](https://github.com/SKEPT1K/handwrite/blob/master/examples/testsingle.js)
