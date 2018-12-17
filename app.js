
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




