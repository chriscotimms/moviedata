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


console.log(movieData["The Darjeeling Limited"].cast[0]);
console.log(movieData["Fantastic Mr. Fox"].plot);
console.log(movieData["The Grand Budapest Hotel"].runtime);
console.log(movieData["The Grand Budapest Hotel"].rating);
console.log(movieData["The Grand Budapest Hotel"].year);



console.log(Object.keys(movieData));
//movieChoice.year + movieChoice.cast + movieChoice.plot + movieChoice.rating;

//get key properties movie strings into an array
let movieList = Object.keys(movieData);
  console.log(movieList[1]);
  console.log(movieList[0]);




  for (let i = 0; i < movieList.length; i++) {
  
  }
  

  

let a = 3;
// testing loading elements is working
addEventListener('load', (event) => {

  for (let i = 0; i < movieList.length; i++) {

    const para = document.createElement("div");
    para.innerHTML = movieList[i] + "<br/><br/>" + movieData[movieList[i]].year + "<br/><br/>" + movieData[movieList[i]].plot + "<br/><br/>Runtime: " + movieData[movieList[i]].runtime + " minutes<br/>" + "Rating: " + movieData[movieList[i]].rating;//Object.keys(movieData);
    document.getElementById("container1").appendChild(para);
  }

});