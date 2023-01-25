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
console.log(agregator);


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

//using anonymous variables with sort function
//to be able to call any numerical property to sort
function sortByProperty(inputArray, property){
  var inputArrayClone = JSON.parse(JSON.stringify(inputArray));
  let byRating = inputArrayClone.sort((a, b) => { 
  return b[property] - a[property];
  });
  console.dir(byRating);
  return byRating;
   
}

const sortedArrayGlobal = []; 
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

    //const toggleInfoCom = document.createElement("button");
    //const toggleInfoComtext = document.createTextNode('reviews');

    const commentText = document.createElement("input");
    commentText.setAttribute("type", "text");
    const commentButton = document.createElement("button");
    const texttext = document.createTextNode('Submit review');
    const commentscomments = document.createElement("div");

    //assign CSS classes (and ID for tracking comments)
    para.className = "movieinfo";
    image.className = "movieimg";
    textContainer.className = "textContainer";
    textInfo.className = "textInfo";
    textInfo.setAttribute('id', "textinfo"+[i]);
    commentButton.setAttribute('id', sortedArray[i].name); //sortedChoice[i].name
    commentText.setAttribute('id', sortedArray[i].name);  //sortedChoice[i].name
    //commentscomments.setAttribute('id', 'comments'+[i]);//div id for comments
    commentscomments.setAttribute('id', 'comments'+sortedArray[i].name);//div id for comments
    //toggleInfoCom.className = 'toggleInfoCom';
    //toggleInfoCom.setAttribute('id', "toggleInfoCom"+[i]);

    //display sorted array + append child functions
    image.src = sortedArray[i].imgUrl;
    textInfo.innerHTML = sortedArray[i].name + "<br/><br/>" + sortedArray[i].plot + "<br/><br/>" + sortedArray[i].year + "<br/><br/>Runtime: " + sortedArray[i].runtime + " minutes<br/>" + "Rating: " + sortedArray[i].rating + "<br><br>"; //verbose, could clean
    
    

    document.getElementById("container1").appendChild(para).appendChild(textContainer);
    textContainer.appendChild(image);
    textContainer.appendChild(textInfo);
    //textInfo.appendChild(toggleInfoCom);
    //toggleInfoCom.appendChild(toggleInfoComtext);

    textInfo.appendChild(commentText);
    commentButton.appendChild(texttext);
    textInfo.appendChild(commentButton);
    textContainer.appendChild(commentscomments);


    //const filteredResult2 = agregator.findIndex((e) => e.name == targetget);
    //agregator[filteredResult2].commentArray.unshift(texty);

    const fixedComs = sortedArray[i].commentArray;
    console.dir(fixedComs);
    document.getElementById('comments'+sortedArray[i].name).innerHTML = fixedComs.join('<br><br>');
    
    



    //let updatedComs = "No Comments Yet";
    //for (let i = 0; i < sortedArray[i].commentArray.length; i++) {
    //  updatedComs += sortedArray[i].commentArray[i] + '<br><br>';
    //}
    //document.getElementById('comments'+[i]).innerHTML = updatedComs;


    //console.log('viewing properties' , sortedArray[i].imgUrl);
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
        console.log(this.value);
        let sortedChoice = sortByProperty(agregator, `${this.value}`);
        updateMovieInfo(sortedChoice);
        //console.dir(sortedChoice[0].commentArray);
        console.log(sortedChoice);
    });
}





// set up initial loading of page
let sortedChoice = sortByProperty(agregator, 'rating');
updateMovieInfo(sortedChoice);



////////////////////////////////////adding comment box////////
/*
let commentArray = [];
agregator[0].comments = commentArray;

document.getElementById('btn').addEventListener('click', function(){
  let texty = document.getElementById('comment1').value;
  commentArray.push(texty);
})
console.log(agregator[0].comments);
*/














/////submit button to trigger pushing comment to array
let commentArrayGlobal = [];
const wrapper = document.getElementById('container1');
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  const targetget = event.target.id;
  //console.dir(targetget);

  const texty = document.getElementById(targetget).value;
  //const texty = event.target.value;
  console.log(texty);

  const filteredResult = sortedChoice.findIndex((e) => e.name == targetget);
  sortedChoice[filteredResult].commentArray.unshift(texty);
//console.log(sortedChoice[filteredResult].commentArray);

const filteredResult2 = agregator.findIndex((e) => e.name == targetget);
  agregator[filteredResult2].commentArray.unshift(texty);
//console.log(agregator[filteredResult2].commentArray);

const allComs = agregator[filteredResult2].commentArray;
//const comList = [];
//for (let i = 0; i < allComs.length; i++) {
//  comList += allComs[i] + '<br><br>';
//}
 

console.dir(allComs);
document.getElementById('comments'+sortedChoice[filteredResult].name).innerHTML = allComs.join('<br><br>');

/*  
function getbyValue(arr, value) {
  for (let i = 0; i < sortedChoice.length; i++) {
    if (arr[i].b == value) return arr[i];
  }
}
getbyValue(sortedChoice, targetget);
*/

  /*
  let lookup = {};
  for (var i = 0; i < sortedChoice.length; i++) {
    lookup[targetget] = [sortedChoice[i]];
  }
console.dir(lookup);
*/


  /*
  //const comShort = sortedChoice[targetget].commentArray[0];
  let allComs = "";
  //for (let i = 0; i < comShort.length; i++) {
  //  commentArrayGlobal += comShort[i];
  //}
  
  for (let i = 0; i < comShort.length; i++) {
    allComs += comShort[i] + '<br><br>';
  }
  document.getElementById('comments'+[targetget]).innerHTML = allComs;
*/

  console.log(sortedChoice);
  
});

