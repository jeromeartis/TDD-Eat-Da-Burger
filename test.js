const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./server");
const expect = chai.expect;

environment = process.env.NODE_ENV || "development";

// API Endpoint Testing
// Setting up the chai http plugin. This plugin allows for HTTP integration testing with Chai assertions!
chai.use(chaiHttp);

// set a variable for making http requests.
let request;

describe('POST /api/burgers', function() {

  beforeEach(function(done) {
    request = chai.request(server);
    done();
  });

  it('should save an burger example', function(done) {
    const reqBody = {
      burger_name: 'Black Bean Burger',
      devoured: false
    };

    // POST the request body to the server
    request
      .post('/api/burgers')
      .send(reqBody)
      .end(function(err, res) {
        const responseStatus = res.status;
        const responseBody = res.body;
        console.log(responseBody)
        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('object')
        // .that.includes({ affectedRows: 1 });

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});

describe('GET /api/burgers', function() {

  beforeEach(function() {
    request = chai.request(server);
  });

  it('should find all burger examples', async function() {

    //hit the GET('/api/users') endpoint
    try {
    const res = await request.get('/api/burgers');


      let responseStatus = res.status;
      let responseBody = res.body;
      console.log(res.body)
      expect(responseBody).to.equal('hi');
      // Run assertions on the response
      expect(responseStatus).to.equal(200);

    } catch (err) {
      expect(err.message).to.be.null;

    }
  });
});


describe('GET /api/devoured', function () {

  beforeEach(function(){
    request = chai.request(server);

  });
  it('should find all devoured', async function(){

    try {
      const res = await request.get('/api/devoured');

      let responseStatus = res.status;
      let responseBody = res.body;
      console.log(res.body)
      expect(responseBody).to.equal('true');
      // Run assertions on the response
      expect(responseStatus).to.equal(200);

    } catch (err) {
      expect(err.message).to.be.null;

    }
  });
});
