// Unit Tests
// Password Validation Test
describe("isBurgerValid", function() {
  it("should return true if field greater than 3 characters", function() {
    expect(isBurgerValid('Double Cajun Burger')).to.equal(true);
  });
  it("should return false if the username provided is less than seven characters", function() {
    expect(isBurgerValid('gwash')).to.equal(false);
  });
});

// Username Validation Test
describe("isValidUsername", function() {
  it("should return true if the username provided is greater than seven characters", function() {
    expect(isValidUsername('georgewashington')).to.equal(true);
  });

  it("should return false if the username provided is less than seven characters", function() {
    expect(isValidUsername('gwash')).to.equal(false);
  });
});

// Functional Tests
describe('register click', function () {
  const data = [
    { burger_name: 'Double Cajun Burger', devoured: 'true'},
  ];

  let server;

  beforeEach(function () {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it('displays a success message after post request', function () {

    server.respondWith('POST', '/api/burgers', [
      200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
    ]);

    $('#ca').val('Double Cajun Burger');


    $('#btn-primary').trigger('click');

    server.respond();

    expect($('#message').text()).to.equal('you have successfully registered');
  });
});
