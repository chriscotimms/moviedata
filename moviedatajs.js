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


console.log(Object.entries(movieData)[0][1].rating);//a working way to access info as a whole


/*
//get key properties movie strings into an array
let movieList = Object.keys(movieData);
  console.log(movieList[1]);
  console.log(movieList[0]);


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



