import { UI } from "./ui.module.js";
import { displayData } from "./details.module.js"
//class responsible for the connections between other classes and fetching the data from the API,also responsible for the home screen
export class games {
	constructor() {
		// using DOM to handle the navbar items
		let navItems = document.querySelectorAll(" nav .navbar-nav li a");
		//a loop to go through each item in the list
		for (let i = 0; i < navItems.length; i++) {
			navItems[i].addEventListener("click", () => {
				//Find out the value of the game tag attribute that the nav item is assigned too
				let gameType = navItems[i].attributes.gameTag.value
				//when any navitem is clicked, go to the nav item that holds the class named "active" and remove it
				document.querySelector(".active").classList.remove("active")
				// add the "active" class to the clicked nav item
				navItems[i].classList.add("active")
				//call the method responsible for getting the games with the category of the nav item
				this.getGames(gameType)
			})
		}
	}
	//method for fetching the games and displaying them
	async getGames(category) {
		//using DOM catch the loading screen from the html
		let load = document.querySelector(".loading")
		//remove the display none from it so it loads and disappears again in the end of the method
		load.classList.remove("d-none")
		//the method used for fetching the data, made by the API
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '04ed4cab30msh4ca0752f5dd6e3dp1cc039jsne76aa86b3af3',
				'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
			}
		};
		//fetch the data from the server and wait for it
		let result = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
		//convert the data into jason so that we can use it in its real format
		let finalResult = await result.json();
		//create an instace from the UI class which is used to display the data
		let showGames = new UI
		//call the method for displaying the data that we got from the API
		showGames.displayGames(finalResult)
		//create and instace from the class responsible for fetching the game details
		let details = new displayData
		// using DOM catch the element from the html that is responsible for displaying the data of a specific game
		let deatailsBox = document.querySelector(".details")
		// using DOM we catch the element that the user willl click by adding an eventlistener to it
		let y = document.getElementsByClassName("card")
		// a loop to go through all of the games that we fetched and displayed
		for (let i = 0; i < y.length; i++) {
			y[i].addEventListener("click", (eventInfo) => {
				// to make the details page apper on the same position of y-axis that the user is on
				//without this line any details will appear on the top of the page making the user in need to  scroll back again to where he was
				document.getElementById("details").style.top = eventInfo.view.scrollY + "px"
				//show the displaybox
				deatailsBox.classList.remove("d-none")
				//get the game details to show
				details.getGameData(finalResult[i].id)
			})
		}
		//remove the loading screen
		load.classList.add("d-none")
	}

}
