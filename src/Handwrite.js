const request = require('request');

class Handwrite {
  constructor(params) {
    const requiredParams = ['username', 'password', 'planId'];

    parseRequiredParams(params, requiredParams);

    this.username       = params.username;
    this.password       = params.password;
    this.planId         = params.planId;
    this.development    = params.development || false;
    this.baseUri        = 'https://www.handwrite.io/api/';
    this.path           = this.development ? 'testsingle' : 'single';
  }

  send(params, callback) {
    const requiredParams = [
      'firstname',
      'lastname',
      'street1',
      'city',
      'region',
      'postcode',
      'senderFirstname',
      'senderLastname',
      'senderStreet1',
      'senderCity',
      'senderRegion',
      'senderPostcode',
      'message',
      'hw',
      'card'
    ];

    parseRequiredParams(params, requiredParams);

    const card = {
      username: this.username,
      password: this.password,
      plan_id: this.planId,
      firstname: params.firstname,
      lastname: params.lastname,
      street1: params.street1,
      city: params.city,
      region: params.region,
      postcode: params.postcode,
      sender_firstname: params.senderFirstname,
      sender_lastname: params.senderLastname,
      sender_street1: params.senderStreet1,
      sender_city: params.senderCity,
      sender_region: params.senderRegion,
      sender_postcode: params.senderPostcode,
      message: params.message,
      hw: params.hw,
      card: params.card
    };

    postSingleEndpoint(card, function (err, res, body) {
      if (err) { throw new Error(err) };

      callback(err, res, body);
    });
  }
}

function parseRequiredParams(params, requiredParams) {
  for (var i = 0; i < requiredParams.length; i++) {
    if (params[requiredParams[i]] === undefined) { throw new Error(`${requiredParams[i]} is required.`) };
  }
}

function postSingleEndpoint(card, callback) {
  const handwrite = this.handwrite;

  const options = {
    uri: handwrite.baseUri + handwrite.path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    json: card
  };

  request(options, function(err, res, body) {
    callback(err, res, body);
  });
}

module.exports = Handwrite;
