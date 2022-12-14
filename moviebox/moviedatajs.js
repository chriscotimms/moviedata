
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



// testing loading elements is working
addEventListener('load', (event) => {
    //let p = document.createElement('p');
    //p.textContent = movieData.The Darjeeling Limited;
    //p.textContent = Object.values(movieData["The Darjeeling Limited"]);
    //document.querySelector('#container1').appendChild(p);
    //document.getElementById("container1").innerHTML = "Iframe is loaded.";

    const para = document.createElement("p");
    para.innerHTML = movieData["The Darjeeling Limited"].cast[0];
    document.getElementById("container1").appendChild(para);
});