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


//add image links
const filmSrcUrlArray = ['https://flxt.tmsimg.com/assets/p168522_p_v12_bf.jpg', 'https://flxt.tmsimg.com/assets/p26926_p_v8_aa.jpg', 'https://darkroom.bbfc.co.uk/751/https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg:2bdb83fdce0a274995e7e3cdaf0da42a', 'https://flxt.tmsimg.com/assets/p10295153_p_v8_at.jpg'];

for (var i = 0; i < agregator.length; i++) {
    agregator[i].imgUrl = filmSrcUrlArray[i];
};






//using anonymous variables with sort function
//to be able to call any numerical property to sort
function sortByProperty(inputArray, property){
  var inputArrayClone = JSON.parse(JSON.stringify(inputArray));
  let byRating = inputArrayClone.sort((a, b) => { 
  return b[property] - a[property];
  });
  return byRating; 
}









//function to clear .movieinfo class objects + repopulate with sorted info
function updateMovieInfo(sortedArray) {

document.querySelectorAll(".movieinfo").forEach(elements => elements.remove()); //remove all children with ".movieinfo" class 
for (let i = 0; i < sortedArray.length; i++) // for loop to process selector through moviedata (/me)
  {
   /*
    const fragment = document.createDocumentFragment();
    const bbb = fragment
    .appendChild(document.createElement('section'))
    .appendChild(document.createElement('ul'))
    .appendChild(document.createElement('li'));
    bbb.textContent = 'hello world';

    document.body.appendChild(fragment);
 */
    
    const para = document.createElement("div"); 
    const textContainer = document.createElement("div");
    const image = document.createElement("img"); 
    const textInfo = document.createElement("p");

    para.className = "movieinfo";
    image.className = "movieimg";
    textContainer.className = "textContainer";
    textInfo.className = "textInfo";

    image.src = sortedArray[i].imgUrl;
    textInfo.innerHTML = sortedArray[i].name + "<br/><br/>" + sortedArray[i].plot + "<br/><br/>" + sortedArray[i].year + "<br/><br/>Runtime: " + sortedArray[i].runtime + " minutes<br/>" + "Rating: " + sortedArray[i].rating; //verbose, could clean
    document.getElementById("container1").appendChild(para).appendChild(textContainer);
    textContainer.appendChild(image);
    textContainer.appendChild(textInfo);
    console.log('viewing properties' , sortedArray[i].imgUrl);
  }
  
};

// radio buttons trigger functions on change
var rad = document.myForm.selection;
var prev = null;
//let sortedChoice = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this !== prev) {
            prev = this; //update prev 
        }

        console.log(this.value);
        let sortedChoice = sortByProperty(agregator, `${this.value}`);
        console.log("Sorted Choice ", sortedChoice);
        updateMovieInfo(sortedChoice);

    });
}






// */


/*
const para = document.createElement("div"); 
para.className = "movieinfo";
para.innerHTML = byRating[i][0] + "<br/><br/>" + byRating[i][1].plot + "<br/><br/>" + byRating[i][1].year + "<br/><br/>Runtime: " + byRating[i][1].runtime + " minutes<br/>" + "Rating: " + byRating[i][1].rating; //verbose, could clean
document.getElementById("container1").appendChild(para);
*/