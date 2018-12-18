/*
A light switch that can be either on or off.

Boolean

//A user's email address.
"String"
"joe@joe.com"
"sam@sam.com"

A spaceship with a hull, laser blasters, tractor beam, and warp drive.
object
let spaceship {
   hull: 'black',
   laser blasters: 'red'
   warp drive: 'fast'
}

A list of student names from our class.
Array
let students ["Steve", "Sam", "Someone", "Else"]

A list of student names from our class, each with a location.
object
let students = [{
  	name: 'Sam',
	location: 'Austin'
  },
  {
    name: 'Steve'
    location: 'New York City'
  },
  {
  	name: 'Smith',
  	location: 'Miami'
  }
  }]



A list of student names from our class, each with a location and each with a list of favorite tv shows.
object
let students [{
 {
  	name: 'Sam',
	location: 'Austin',
	show: ['Breaking Bad']
  },
{
    name: 'Steve'
    location: 'New York City',
    show: ['True Detective']
  },
 {
  	name: 'Smith',
  	location: 'Miami',
  	show: ['The Office']
  }
}]

let rainbow = ['red', 'orange', 'yellow', 'green', 'blue']
//console.log(rainbow[4])

let johnathan = {
	favoriteFood: 'pizza',
	hobby: 'Fly Fishing',
	city: 'Austin',
	dataType: 'String'
}
console.log(johnathan.hobby)


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

//console.log(crazyObject.taco[1].salsa[5])
//console.log(crazyObject.larry.quotes[0])
//console.log(crazyObject.larry.characters[2].favourtieHobby)
//console.log(crazyObject.larry.nicknames[1])
//console.log(crazyObject.larry.characters[1])
//console.log(crazyObject.larry.characters[1].name)
*/

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
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)








