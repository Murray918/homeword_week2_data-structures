//1. Data Types
//1a.true/false
let lightSwitch = false
if(lightSwitch === true ) {
	console.log("Light is on")
} else if (lightSwitch === false) {
	console.log("Light is off")
}
//1B string
let emailAddress = "JulsCamarillo@compuserv.net"
//1C Array
let spaceShip = ["hull","laser blasters","tractor beam","warp drive"]
//1D Array
let studentList = ["Juls","Jamal","Tristan","AJ"]
//1E Objects inside an array
let studentInfo = [ {
	name: "Juls",
	location: "home", },
	{ name: "AJ",
	location: "work", }]
console.log(studentInfo)
//1F Array inside an object inside an array
let moreStudentInfo = [ {
	name: "Juls",
	location: "home",
	favorite_shows: ["The Office","Parks and Rec"] },
	{ name: "AJ",
	location: "work", 
	favorite_shows: ["supernatural"]
	}
	]
console.log(moreStudentInfo)
//2 take it easy
let colors = ['red','orange','yellow','green','blue','indigo','violet']
console.log(colors[4])

let Jules = {
	fav_food: "Ramen",
	hobby: "Golfing",
	town: "Austin",
	datatype: "Triple Nested Arrays"

}
console.log(Jules)
console.log(Jules.hobby)