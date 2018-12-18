// Data-Types 1
// A light switch that can be either on or off.
// boolean

// A user's email address.
// string

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// object

// A list of student names from our class.
// Array

// A list of student names from our class, each with a location.
// an Array with objects inside

/* A list of student names from our class, each with a location 
and each with a list of favorite tv shows.*/
// an array with an object and an array within

// Take It Easy 2
// 1 & 2
// let colorRain = ["blue", "red", "yellow", "green", "orange", "indigo"]
// colorRain[0]

//3 & 4
// let yourName = {
// 	favoriteFood: "pizza",
// 	hobby: "magic",
// 	homeTown: "atlantis",
// 	favoriteData: "arrays"
// }
// yourName.hobby

// Crazy Object! 3
// const crazyObject = {
//   taco: [
//     {
//       meat: 'steak',
//       cheese: ['panela', 'queso', 'chihuahua']
//     },
//     {
//       meat: 'chicken',
//       salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//     },
//   ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [
//       {
//         name: "Jeff",
//         occupation: "manager"
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude"
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favourtieHobby: "Swearing at Larry and Jeff"
//       },
//     ]
//   }
// }
// console.log(crazyObject.taco[1].salsa[5])
// console.log(crazyObject.larry.quotes[0])
// console.log(crazyObject.larry.characters[2].favourtieHobby)
// console.log(crazyObject.larry.nicknames[1])
// console.log("The object contains the name " + crazyObject.larry.characters[1].name)

// Object-ception
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
inception.limbo = null