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
  fillDogChart();
})

function fillDogChart() {
  var dogFoodHTML = "";
  dogFoodHTML += `<table>`
  dogFoodHTML += `<tr><th scope="col">Brand</th>`
  dogFoodHTML += `<th scope="col">Type</th>`
  dogFoodHTML += `<th scope="col">Volume</th>`
  dogFoodHTML += `<th scope="col">Price</th></tr>`

  // interate through the object to fill out the table
  for(var i = 0; i < dogfood.dog_brands.length; i++) {
    for (var j = 0; j < dogfood.dog_brands[i].types.length; j++) {
      for(var k = 0; k < dogfood.dog_brands[i].types[j].volumes.length; k++) {
        dogFoodHTML += `<tr><td>${dogfood.dog_brands[i].name}</td>`;
        dogFoodHTML += `<td>${dogfood.dog_brands[i].types[j].type}</td>`;
        dogFoodHTML += `<td>${dogfood.dog_brands[i].types[j].volumes[k].name}</td>`;
        dogFoodHTML += `<td>${dogfood.dog_brands[i].types[j].volumes[k].price}</td></tr>`;
        console.log("Price:", dogfood.dog_brands[i].types[j].volumes[k].price)
      }
    }
  }
  //add closing table tag
  dogFoodHTML += `</table>`
  console.log(dogFoodHTML);
  //add html to element on page
  $(".dogFood").html(dogFoodHTML);
}
