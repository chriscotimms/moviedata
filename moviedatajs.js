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
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
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

//let movieChoice = movieData["The Grand Budapest Hotel"];
let movieChoice = movieData["Fantastic Mr. Fox"];
console.log(movieChoice.cast);




  let castString = "";
  for (let i = 0; i < movieData["The Darjeeling Limited"].cast.length; i++) {
    castString += movieData["The Darjeeling Limited"].cast[i] + ", ";
  }
  console.log(castString);



// testing loading elements is working
addEventListener('load', (event) => {
    const para = document.createElement("p");
    para.innerHTML =  movieChoice.year + movieChoice.cast + movieChoice.plot + movieChoice.rating;
    document.getElementById("container1").appendChild(para);
});