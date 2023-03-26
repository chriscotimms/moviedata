//#Display all info, allow user to sort films via rating etc

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

//add key of upper object into properties with values within object
me.forEach(([key, value]) => { 
value.name = key;
});

//turn "array of objects of objects" into "array of objects"
//+ removing nesting level of objects
const agregator = [];
for (var i = 0; i < me.length; i++){
  agregator[i] = me[i][1];
}
//console.log(agregator);


//add image links
const filmSrcUrlArray = ['https://flxt.tmsimg.com/assets/p168522_p_v12_bf.jpg', 
'https://flxt.tmsimg.com/assets/p26926_p_v8_aa.jpg', 
'https://cdn.shopify.com/s/files/1/0037/8008/3782/products/EEC8D35A-C900-4EF1-B476-C9F876492747-328288_1024x1024@2x.jpg?v=1611687955', 
'https://flxt.tmsimg.com/assets/p10295153_p_v8_at.jpg'];

for (var i = 0; i < agregator.length; i++) {
    agregator[i].imgUrl = filmSrcUrlArray[i];
};


//create commentArray object key for inputting comments
agregator.forEach((obj) => obj.commentArray = new Array); 


//clone array using anonymous variables with sort function
//to be able to call any numerical property to sort
function sortByProperty(inputArray, property){
  var inputArrayClone = JSON.parse(JSON.stringify(inputArray));
  let byRating = inputArrayClone.sort((a, b) => { 
  return b[property] - a[property];
  });
  //console.dir(byRating);
  return byRating;
   
}

//establish additional variables for later code 
const sortedArrayGlobal = []; 
let commentArrayGlobal = [];


//function for displaying info and comments
const infoToggle = (e) => {
  let info = e.target.parentNode.querySelector('.textInfo');
  let com = e.target.parentNode.querySelector('.comInfo');
  com.classList.add('hidden');
  info.classList.toggle('hidden');
};

const comToggle = (e) => {
  console.log(e.target);
  let com = e.target.parentNode.querySelector('.comInfo');
  let info = e.target.parentNode.querySelector('.textInfo');
  info.classList.add('hidden');//hide info section
  com.classList.toggle('hidden');//reveal comment section

  let comDisplay = e.target.parentNode.querySelector('.comDisplay').id;
  let filteredResult2 = agregator.findIndex((e) => e.name == comDisplay);
  let allComs = agregator[filteredResult2].commentArray;
  
  comDisplay.innerHTML = allComs.join('<br><br>'); //repopulate comment section

  
};



//function for adding comments
const addComment = (e) => {
  const targetget = e.target.id;
  const texty = "anonymous says:" + "</br>" + document.getElementById(e.target.id + "text").value;

  const filteredResult = sortedChoice.findIndex((e) => e.name == targetget);
  sortedChoice[filteredResult].commentArray.unshift(texty);

  const filteredResult2 = agregator.findIndex((e) => e.name == targetget);
  agregator[filteredResult2].commentArray.unshift(texty);

  const allComs = agregator[filteredResult2].commentArray;
  let comDisplayLocation = e.target.parentNode.querySelector('.comDisplay');
  comDisplayLocation.innerHTML = allComs.join('<br><br>'); //repopulate comment section

  document.getElementById(e.target.id + "text").value = "";//clear textfield
};



//function to clear .movieinfo class objects + repopulate with sorted info
function updateMovieInfo(sortedArray) {
document.querySelectorAll(".movieinfo").forEach(elements => elements.remove()); //remove all children with ".movieinfo" class 



// for loop to process selector through moviedata (/me)
for (let i = 0; i < sortedArray.length; i++) 
  {
    //create elements para -> textContainer -> img + p
    const para = document.createElement("div"); 
    const textContainer = document.createElement("div");
    const image = document.createElement("img"); 
    const textInfo = document.createElement("p");
    

    //buttons for info and comments
    const infobtn = document.createElement("button");
    const combtn = document.createElement("button");
    const infobtntxt = document.createTextNode('Info');
    const combtntxt = document.createTextNode('Comments');

    //input for comments
    const commentText = document.createElement("input");
    const commentButton = document.createElement("button");
    const texttext = document.createTextNode('Submit review');
    const commentscomments = document.createElement("div");
    const comDisplay = document.createElement("p");

    //assign CSS classes, ID's and attributes
    para.className = "movieinfo";
    para.setAttribute('tabindex', '0');
    image.className = "movieimg";
    textContainer.className = "textContainer";
    textInfo.classList.add('textInfo', 'hidden');
    //textInfo.className = "textInfo";
    textInfo.setAttribute('id', "textinfo"+[i]);

    infobtn.className = "infobtn";
    infobtn.setAttribute('tabindex', '0');
    infobtn.addEventListener('click', infoToggle);
    combtn.className = "combtn";
    combtn.setAttribute('tabindex', '0');
    combtn.addEventListener('click', comToggle);

    commentText.setAttribute("type", "text");
    commentText.setAttribute('id', sortedArray[i].name + "text");  //sortedChoice[i].name
    commentText.setAttribute('placeholder', "enter you review here");

    commentButton.setAttribute('id', sortedArray[i].name); //sortedChoice[i].name
    commentButton.addEventListener('click', addComment);//add eventlistener to comment button
    
    commentscomments.classList.add('comInfo', 'hidden');//div id for comments
    //commentscomments.className = "comInfo";//div id for comments
    comDisplay.className = "comDisplay";
    comDisplay.setAttribute('id', sortedArray[i].name);

    //populate comments and movie info from sortedArray of objects
    image.src = sortedArray[i].imgUrl;
    textInfo.innerHTML = "<h3>" + sortedArray[i].name + "</h3>" + "<br/><br/>" + sortedArray[i].plot + "<br/><br/>" + sortedArray[i].year + "<br/><br/>Runtime: " + sortedArray[i].runtime + " minutes<br/>" + "Rating: " + sortedArray[i].rating + "<br><br>"; 
    const fixedComs = sortedArray[i].commentArray;
    comDisplay.innerHTML = fixedComs.join('<br><br>'); //repopulate comment section

    //display sorted array + append child functions
    document.getElementById("container1").appendChild(para).appendChild(textContainer);
    para.appendChild(infobtn);
    para.appendChild(combtn);
    infobtn.appendChild(infobtntxt);
    combtn.appendChild(combtntxt);
    textContainer.appendChild(image);
    textContainer.appendChild(textInfo);
    textContainer.appendChild(commentscomments);
    commentscomments.appendChild(commentText);
    commentscomments.appendChild(commentButton);
    commentscomments.appendChild(comDisplay);
    commentButton.appendChild(texttext);
  }
};

// radio buttons trigger functions on change
let rad = document.myForm.selection;
let prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this !== prev) {
            prev = this; //update prev 
        } 
        //console.log(this.value);
        let sortedChoice = sortByProperty(agregator, `${this.value}`);
        updateMovieInfo(sortedChoice);
  
    });
}



// set up initial loading of page
let sortedChoice = sortByProperty(agregator, 'rating');
updateMovieInfo(sortedChoice);

////////////////////////////////////adding comment box////////

/////submit button to trigger pushing comment to array




/*
let commentArrayGlobal = [];

const wrapper = document.getElementById('container1');
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  const targetget = event.target.id;
  const texty = "anonymous says:" + "</br>" + document.getElementById(targetget).value;
  const filteredResult = sortedChoice.findIndex((e) => e.name == targetget);
  sortedChoice[filteredResult].commentArray.unshift(texty);
  console.log(texty);

const filteredResult2 = agregator.findIndex((e) => e.name == targetget);
  agregator[filteredResult2].commentArray.unshift(texty);

const allComs = agregator[filteredResult2].commentArray;

document.getElementById('comments'+sortedChoice[filteredResult].name).innerHTML = allComs.join('<br><br>');
});
*/



/////submit button to trigger pushing comment to array
/* BACKUP IN CASE ONE ABOVE GOES HAYWIRE

let commentArrayGlobal = [];
const wrapper = document.getElementById('container1');
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  const targetget = event.target.id;
  const texty = "anonymous says:" + "</br>" + document.getElementById(targetget).value;
  const filteredResult = sortedChoice.findIndex((e) => e.name == targetget);
  sortedChoice[filteredResult].commentArray.unshift(texty);
  console.log(texty);

const filteredResult2 = agregator.findIndex((e) => e.name == targetget);
  agregator[filteredResult2].commentArray.unshift(texty);

const allComs = agregator[filteredResult2].commentArray;

document.getElementById('comments'+sortedChoice[filteredResult].name).innerHTML = allComs.join('<br><br>');

});

/////BACKUP IN CASE ONE ABOVE GOES HAYWIRE
*/