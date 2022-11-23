//#Display all info, allow user to sort films via rating etc
//# also to add other Wes Anderson films

let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },

  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },

  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },

  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};


// turn overall structure into an array
const me = Object.entries(movieData); 
//console.log(me);

//add key of upper object into properties with values within object
me.forEach(([key, value]) => { 
value.name = key;
});

//turn array of objects of objects into array of objects
//removing nesting level of objects
const agregator = [];
for (var i = 0; i < me.length; i++){
  agregator[i] = me[i][1];
}
console.log(agregator);


/*
const byRating = me.sort((a, b) => { //sorts - still needs to be anonymised
  return b[1].year - a[1].year;
});
console.log(byRating[0][0] + byRating[1][0] + byRating[2] + byRating[3]);
console.log(byRating);
*/


/*
addEventListener('load', (event) => { //onload, should be distinct from onclick

  for (let i = 0; i < byRating.length; i++) // get length of movielist
  {
    const para = document.createElement("div"); 
    para.className = "movieinfo";
    para.innerHTML = byRating[i][0] + "<br/><br/>" + byRating[i][1].plot + "<br/><br/>" + byRating[i][1].year + "<br/><br/>Runtime: " + byRating[i][1].runtime + " minutes<br/>" + "Rating: " + byRating[i][1].rating; //verbose, could clean
    document.getElementById("container1").appendChild(para);
  }
  });
*/

//using anonymous variables with sort function
//to be able to call any numerical property to sort
function sortByProperty(inputArray, property){
  var inputArrayClone = JSON.parse(JSON.stringify(inputArray))
  let byRating = inputArrayClone.sort((a, b) => { //sorts - still needs to be anonymised
    return a[property] - b[property];
  });
  return byRating; 
}

//let genericArray = [{test:1010}, {test:1005}, {test:1075}];
//let sortedArray = sortByProperty(genericArray, "test");
//console.log("test ", sortedArray);

//let sortedArray2 = sortByProperty(agregator, "runtime");
//console.log("rating ", sortedArray2);

let sortedArray4 = sortByProperty(agregator, "year");
console.log("year ", sortedArray4);

let sortedArray3 = sortByProperty(agregator, "runtime");
console.log("runtime ", sortedArray3);
/*
*/






/*
function updateMovieInfo() {
  document.querySelectorAll(".movieinfo").forEach(elements => elements.remove()); //remove all children with ".movieinfo" class
  

                for (let i = 0; i < byRating.length; i++) // for loop to process selector through moviedata (/me)
                {
                  const para = document.createElement("div"); 
                  para.className = "movieinfo";
                  para.innerHTML = byRating[i][0] + "<br/><br/>" + byRating[i][1].plot + "<br/><br/>" + byRating[i][1].year + "<br/><br/>Runtime: " + byRating[i][1].runtime + " minutes<br/>" + "Rating: " + byRating[i][1].rating; //verbose, could clean
                  document.getElementById("container1").appendChild(para);
                }
  
  };
///*
// radio buttons
var rad = document.myForm.selection;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this !== prev) {
            prev = this; //update prev 
            updateMovieInfo(this);
        }

        console.log(this.value)
    });
}

*/


/*
const para = document.createElement("div"); 
para.className = "movieinfo";
para.innerHTML = byRating[i][0] + "<br/><br/>" + byRating[i][1].plot + "<br/><br/>" + byRating[i][1].year + "<br/><br/>Runtime: " + byRating[i][1].runtime + " minutes<br/>" + "Rating: " + byRating[i][1].rating; //verbose, could clean
document.getElementById("container1").appendChild(para);
*/