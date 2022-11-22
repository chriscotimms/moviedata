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

//const me = Object.entries(movieData);
//const meArray = Object.entries(me);
//console.log("meArray" + meArray);

const me = Object.entries(movieData);
//console.log("me" + me);

me.forEach(([key, value], index) => {
  console.log(index);
  console.log(key);
  console.log(value.rating);
});


/*
const MoviesNewSort = me.sort((a,b) => {
  return a.runtime - b.runtime;
})
console.log("MoviesNewSort" + MoviesNewSort);
*/


/*
//(movieData)<-nameofObject--[0-3]<-Film number--[0]<-FilmNameString/[1]=Sub-keys + values, eg .plot
console.log(Object.entries(movieData)[0][1].runtime);//a working way to access info as an object
console.log(Object.keys(movieData)[1]);//a working way to access info as an object
console.log(Object.values(movieData)[1].rating);//a working way to access info as an object
*/



//const generalSort = ae.sort(a,b)

/*
const ratingSorted = [];
for (var i = 0, f = i+1; i < a.length; i++) {
if (a[i][1].runtime > a[f][1].runtime) {

    ratingSorted.unshift(a[i][1].runtime);
    console.log(a[i][1].runtime + 'yes' + i + f);

} else {

    ratingSorted.push(a[i][1].runtime);
    console.log(a[i][1].runtime + 'no' + i + f);
} 
}
console.log(ratingSorted + "ratings sorted" + i);
*/

/*
//Copy array and sort order according to ratings
let arr = [];
for (var i = 0; i < a.length; i++) {
  arr.push({
      movie: a[i][0],
      runtime: b[i].runtime
  });
}
console.log(arr);
*/

/*
for (let j = 0; j < arr.length; j++) {
arr[1].sort(function(a, b) {return b - a});
}
console.log(arr + 'sorted');
*/

//arr.sort(function(a, b) {return b[0].runtime - a[1].runtime });
//console.log(arr + 'runtime sort');




//console.log(ratingSorted + "ratingsSorted");
//console.log(ratingSortedCopy + "ratingsSortedCopy");




/*
let result = [];
const compareArrays = (a, b) => {
for (var i = 0; i < a.length; i++) {
  if (a[i] == b) {
    result.push(i + 'yes');
    } else {
      //result.push(i + 'no');
    }
  } 
  console.log(result);
}


console.log(compareArrays(ratingSortedCopy, ratingSorted[0]));
*/




/*
function comparativeFunction(c, d) {
for (var varIndex = 0; varIndex < d.length; varIndex++) {
  compareArrays(d, c[varIndex]);
}
}
comparativeFunction(ratingSortedCopy, ratingSorted);
*/


/*
const compareArrays = (a, b) => {
let result = [];
for (var i = 0; i < a.length; i++) {
  if (a[i] == b[i]) {
    result.push(i);
  } else {
    for (var j = 0; i < b.length; j++){
      if (a[i] == b[j]) {
        result.push(j);
      }
    }

  }
}
return result;
}

console.log(compareArrays(ratingsSortedCopy, ratingSorted));
*/   


//map out change in array, to rearrange display order
//let newOrder = [];
//for (let i = 0; i < Object.entries(movieData).length; i++) {
//  if (ratingSorted[i] === Object.entries(movieData)[i][1].runtime);
//  newOrder.push(i);
//} 
//console.log(newOrder);




//get key properties movie strings into an array
let movieList = Object.keys(movieData);
console.log(movieList[1]);
console.log(movieList[0]);
/*

//check values of ratings key, then output to an array
let ratingSorted = [];
for (let i = 0; i < movieList.length; i++) {
ratingSorted.push(movieData[movieList[i]].rating);
}
console.log(ratingSorted);

//Sort order according to ratings
ratingSorted.sort((a, b) => b - a);
console.log(ratingSorted);

//find items based on order 




//check values of ratings key, then output to an Object
const ratingObject = new Object();
for (let i = 0; i < movieList.length; i++) {
ratingObject[i] = movieData[movieList[i]].rating;
}
console.log(Object.values(ratingObject));

*/



// testing loading elements are working
addEventListener('load', (event) => {

for (let i = 0; i < movieList.length; i++) // get length of movielist
{
  const para = document.createElement("div"); 
  para.className = "movieinfo";
  para.innerHTML = movieList[i] + "<br/><br/>" + movieData[movieList[i]].plot + "<br/><br/>" + movieData[movieList[i]].year + "<br/><br/>Runtime: " + movieData[movieList[i]].runtime + " minutes<br/>" + "Rating: " + movieData[movieList[i]].rating;//Object.keys(movieData);
  document.getElementById("container1").appendChild(para);
}
});