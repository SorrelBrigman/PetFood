//global variables

var dogfood;

//get json file info for dog food and store it:

var promise1 = new Promise(function (resolve, reject){
  $.ajax({
    url: "dogfood.json"
  })
  .done(function(data, t, x){
    resolve(data)
  })
})


promise1.then(function(data){
  dogfood = data;
  console.log(dogfood);
})

function fillDogChart() {
  var dogFoodHTML = "";
  dogFoodHTML += `<table>`
  dogFoodHTML += `<tr><th scope="col">Brand</th>`
  dogFoodHTML += `<tr><th scope="col">Type</th>`
  dogFoodHTML += `<tr><th scope="col">Volume</th>`
  dogFoodHTML += `<tr><th scope="col">Price/th></tr>`

  // interate through the object to fill out the table
  $(dogfood).each(function(i) {
    $(dogfood[i]).each()
  })
  }
}
