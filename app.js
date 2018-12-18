// //1. Data Types
// //1a.true/false
// let lightSwitch = false
// if(lightSwitch === true ) {
// 	console.log("Light is on")
// } else if (lightSwitch === false) {
// 	console.log("Light is off")
// }
// //1B string
// let emailAddress = "JulsCamarillo@compuserv.net"
// //1C Array
// let spaceShip = ["hull","laser blasters","tractor beam","warp drive"]
// //1D Array
// let studentList = ["Juls","Jamal","Tristan","AJ"]
// //1E Objects inside an array
// let studentInfo = [ {
// 	name: "Juls",
// 	location: "home", },
// 	{ name: "AJ",
// 	location: "work", }]
// console.log(studentInfo)
// //1F Array inside an object inside an array
// let moreStudentInfo = [ {
// 	name: "Juls",
// 	location: "home",
// 	favorite_shows: ["The Office","Parks and Rec"] },
// 	{ name: "AJ",
// 	location: "work", 
// 	favorite_shows: ["supernatural"]
// 	}
// 	]
// console.log(moreStudentInfo)
// //2 take it easy
// let colors = ['red','orange','yellow','green','blue','indigo','violet']
// console.log(colors[4])

// let Jules = {
// 	fav_food: "Ramen",
// 	hobby: "Golfing",
// 	town: "Austin",
// 	datatype: "Triple Nested Arrays"

// }
// console.log(Jules)
// console.log(Jules.hobby)

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
//3
console.log(crazyObject.taco[1].salsa[5])//my mouth is burning

console.log(crazyObject.larry.quotes[0])//prettayy good

console.log(crazyObject.larry.characters[2].favourtieHobby)//swearing at Larry and Jeff

console.log(crazyObject.larry.nicknames[1])//chicken teri boyyy

console.log(crazyObject.larry.characters[1].name)//funkhauser

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

//object-ception
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5)
