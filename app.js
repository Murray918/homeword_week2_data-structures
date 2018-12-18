// // // 1. Data Types
// // A light switch that can be either on or off.
// let lightSwitch = false
// // A user's email address
// let usersEmail = "user@email.com"
// // A spaceship with a hull, laster blasters, tractorm beam, and warp drive.
// let spaceshipParts = ["hull", "laser blasters", "tractor beam", "warp drive"]
// // A list of student names from our class.
// let studentNames = ["Lance", "AJ", "Andrew", "Josh", "Christopher", "Jacob", "Jonathan", "Jamal", "Jules", "Tristan"]
// // A list of student names from our class, each with a location.
// let students = {
// 	name:
// 	location:
// }
// // A list of student names from our class, each with location, and a list of favorite tv shows.
// let allOfIt = {
// 	[name:
// 	location:
// 	favTvShow:
// 	]
// }

// 2.
let rainbow = ["red", "orange", "blue", "green", "indigo", "violet"]
console.log(rainbow[2])
let Lance = {
	favFood: "pho",
	hobby: "cooking",
	currentCity: "Austin",
	favDataType: "arrays"
}
console.log(Lance.hobby)

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

console.log(crazyObject.taco[1].salsa[5])
console.log(crazyObject.larry.quotes[0])
console.log(crazyObject.larry.characters[2].favourtieHobby)
console.log(crazyObject.larry.nicknames[1])
console.log(crazyObject.larry.characters)

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

limbo = null
console.log(limbo)