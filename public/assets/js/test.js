
const isBurgerValid = function(){
  let value = $('#ca').val()
  console.log(value)
  if (value === true ){
    return value
  }
}

const isDevouredTrue = function(){
  let value = $('.changed-devoured').data('newdevoured')
  console.log(value)
  if(value === true){

    return value
  }
}

const isDevouredFalse = function (){
  let value = $('.changed-devoured').data('newdevoured')
  console.log(value)
  if(value === false){

    return value
  }
}


// // Password Validation Test
// describe("isBurgerValid", function() {
//   it("should return true if field greater than 3 characters", function() {
//     expect(isBurgerValid('Double Cajun Burger')).to.equal(true);
//   });
//   it("should return false if field provided is less than seven characters", function() {
//     expect(isBurgerValid('gwash')).to.equal(false);
//   });
// });
//
// // Validate Devoured is true
// describe("isDevouredTrue", function() {
//   it("should return true if the username provided is greater than seven characters", function() {
//     expect(isDevouredTrue('georgewashington')).to.equal(true);
//   });
//
//   it("should return false if the username provided is less than seven characters", function() {
//     expect(isValidUsername('gwash')).to.equal(false);
//   });
// });

// Functional Tests
describe("isBurgerValid", function () {

  const data = [
    { burger_name: 'Double Cajun Burger', devoured: false },
  ];

  let server;

  beforeEach(function () {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it("should return object", function (){

    server.respondWith('POST', '/api/burgers/', [
      200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
    ]);

    $('#ca').val('Double Cajun Burger');


    $('#btn-primary').trigger('click');

    server.respond();

    expect(isBurgerValid(data)).to.be.an('object');

  });
});
