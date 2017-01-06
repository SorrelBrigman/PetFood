//global variables

var dogfood;
var catfood;

//get json file info for dog food and store it:

var promise1 = new Promise(function (resolve, reject){
  $.ajax({
    url: "dogfood.json"
  })
  .done(function(data, t, x){
    resolve(data)
  })
})

//after file loaded, fill dog food chart
promise1.then(function(data){
  dogfood = data;
  console.log(dogfood);
  fillDogChart();
})

//get json file info for cat food and store it:

var promise2 = new Promise(function (resolve, reject){
  $.ajax({
    url: "catfood.json"
  })
  .done(function(data, t, x){
    resolve(data)
  })
})

//after file loaded, fill cat food chart
promise2.then(function(data){
  catfood = data;
  console.log(catfood);
  fillCatChart();
})


///function to fill the dog food chart
function fillDogChart() {
  var dogFoodHTML = "";
  dogFoodHTML += `<table>`
  //table header cells
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

      }
    }
  }
  //add closing table tag
  dogFoodHTML += `</table>`
  //add html to element on page
  $(".dogFood").html(dogFoodHTML);
}

///function to fill the cat food chart
function fillCatChart() {
  var catFoodHTML = "";
  //table header cells
  catFoodHTML += `<table>`
  catFoodHTML += `<tr><th scope="col">Brand</th>`
  catFoodHTML += `<th scope="col">Breeds</th>`
  catFoodHTML += `<th scope="col">Type</th></tr>`

  // interate through the object to fill out the table

//list brand of cat food
  for(var i = 0; i < catfood.cat_brands.length; i++) {
    catFoodHTML += `<tr><td>${catfood.cat_brands[i].name}</td><td>`;
      //put all cat breeds into same table cell
    for (var j = 0; j < catfood.cat_brands[i].breeds.length; j++) {
      catFoodHTML += `${catfood.cat_brands[i].breeds[j]}, `;
    }
    //close data cell and open the next data cell
    catFoodHTML += `</td><td>`
    // list the types
    for(var j = 0; j < catfood.cat_brands[i].types.length; j++)  {
        catFoodHTML += `${catfood.cat_brands[i].types[j].type} :`;
        // list the volumes and corresponding prices of said type
        for(var k = 0; k < catfood.cat_brands[i].types[j].volumes.length; k++) {
          catFoodHTML += ` ${catfood.cat_brands[i].types[j].volumes[k].name} -`;
         catFoodHTML += `$${catfood.cat_brands[i].types[j].volumes[k].price}, `;
        }
      }
      //close data cell of types, volumes and prices, also close row for that brand
      catFoodHTML += `</td></tr>`;

  }
  //add closing table tag
  catFoodHTML += `</table>`

  //add html to element on page
  $(".catFood").html(catFoodHTML);
}
