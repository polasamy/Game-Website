import{games} from "./games.module.js"

//this class is used to act as a display container for the data from the API
export class UI{
	//method for displaying the list of the games in the API
	 displayGames(game) {
		// Using dom we catch the HTML element that we will need to display the data into
		let p = document.querySelector("section .row")
		//creat an empty container that we will sttore the data into
		let gameList = ``
		//a loop to go throught each object in the array of objects that we will get from the parameter
		for (let i = 0; i < game.length; i++) {
			//for each object in the array we add this specific data  and at the end the gamelist will be containing all of the objects of the array 
			gameList += `<div class="col-lg-3 col-md-4 col-sm-6">
				<div class=" card h-100">              
						<img src="${game[i].thumbnail}" class="card-img-top p-2 pb-1" alt="...">
						<div class="card-body p-2 pb-4">
							<h5 class="card-title d-inline-block text-white fs-6">${game[i].title}</h5>
							<span class="badge float-end p-2    ">${game[i].genre}</span>
							<div class="clear"></div>
							<p class="card-text  text-center px-1 text-white-50">
							${game[i].short_description}</p>
						</div>
						<div class="card-footer p-0  d-flex  justify-content-between">
							<p class=" ">${game[i].genre}</p>
							<p class=" ">${game[i].platform}</p>			
					</div>
				</div>
			</div>`
		}
		//after we finish filling the container we add it to the html document
		p.innerHTML = gameList
	}
	//method for displaying tspecific data for the needed game
	displayGameData(data){
		let x = document.querySelector(".details")
		let y;
		//to handle the errors because not all the objects in the API have images 
		try{y=data.screenshots[0].image}
		catch(err){
			y="../img/404-web-page-with-error-message-glitch-style-vector-27943098.jpg"
		}
		let gameData=`  <div class="container text-white">
		<div class="d-flex justify-content-between my-3">
			<p class="fs-2">Details Game</p>
			<button  class="btn-close buttonClose btn-close-white"  type="button"></button>
		</div>
		<div class="row">
			<div class="col-md-4 ">
				<img class="w-100" src="${y}" alt="">
			</div>
			<div class="col-md-8 ">
				<p>Title: ${data.title}</p>
				<p>Category: <span class="badge p-2 ">${data.genre}</span></p>
				<p>Platform: <span class="badge p-2 ">${data.platform}</span></p>
				<p>Status: <span class="badge p-2 ">${data.status}</span></p>
				<p>${data.description}</p>
				<a target="_blank" href="${data.game_url}"><button class="show-game-url">show games </button></a>

			</div>
		</div>
	</div>`
		x.innerHTML=gameData;
	}
}


