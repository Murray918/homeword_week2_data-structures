
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
