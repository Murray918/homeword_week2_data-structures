
console.log(`******* #1) Data Types *******` );

//- Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. 
//For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:

//- A light switch that can be either on or off.
//I would use a Boolean.
let light = true;

//- A user's email address.
//I would use a string.
let email = "email@email.com";

//- A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//I would use an array of strings
let spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"];

//- A list of student names from our class.
//I would use a list of strings
let studentsNames = ["Andrew", "Murray", "Mark"];

//- A list of student names from our class, each with a location.
//I would use an array of Object
let studentsNames2 = [{name: "Andrew", location: "North Pole"}, {name: "Mark", location: "South Pole"}]

//- A list of student names from our class, each with a location and each with a list of favorite tv shows.
//I would make an Object of the names, then an object for each name with location as a key with a string variable and favTVshow as a key that takes an Array of favorite TV shows
const name = { 
    Mark: { 
        location: "North Pole",
        favTVShows: ['Show 1', 'Show2']  
    }
};


console.log(`******* #2) Take it Easy *******` );


//Take it Easy
//- Make an array that holds all of the colors of the rainbow.
//- Write code that will access "blue" from the rainbow array.
//- Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
//- Write code that will access your hobby from the object that you just created.

let colorsOfRainbow = ["Red", "Orange","Yellow","Green","Blue","Indigo", "Violet"];
console.log(colorsOfRainbow[4]);

const Christopher = {
	food: "Spaghetti",
	hobby: "football",
	town: "Austin",
	datatype: "String"
}

console.log(Christopher.hobby);

console.log(`******* #3) Crazy Object! *******` );

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

//Use crazyObject to log the following.
//"omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

//"Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

//"Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
//"Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1])
//The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1])

console.log(`******* #4) Object-ception *******` );

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

//change the value of limbo to null
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

console.log(`******* #5) Bond Films *******` );


