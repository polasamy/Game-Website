import{games} from "./games.module.js"
let x = new games
x.getGames("mmorpg")






























// let p = document.querySelector("section .row")
// async function displayGames() {
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': '04ed4cab30msh4ca0752f5dd6e3dp1cc039jsne76aa86b3af3',
// 			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// 		}
// };
// 	let result = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
// 	let result2 = await result.json();
// 	let finalResult = Object.entries(result2)
// 	let cartona = ``
// 	for (let i = 0; i < finalResult.length; i++) {
// 		cartona += `<div class="col-lg-3 col-md-4 col-sm-6">
// 			<div class=" card h-100">              
// 					<img src="${finalResult[i][1].thumbnail}" class="card-img-top p-2 pb-1" alt="...">
// 					<div class="card-body p-2 pb-4">
// 						<h5 class="card-title d-inline-block text-white fs-6">${finalResult[i][1].title}</h5>
// 						<span class="badge float-end p-2    ">${finalResult[i][1].genre}</span>
// 						<div class="clear"></div>
// 						<p class="card-text  text-center px-1 text-white-50">
// 						${finalResult[i][1].short_description}</p>
	
	
// 					</div>
// 					<div class="card-footer p-0  d-flex  justify-content-between">
// 						<p class=" ">${finalResult[i][1].genre}</p>
// 						<p class=" ">${finalResult[i][1].platform}</p>
			
// 				</div>
// 			</div>
// 		</div>`
// 		p.innerHTML = cartona
// 	}
// 	console.log(finalResult[1][1]);
// }
// console.log(arr);

//     console.log(typeof( finalResult[1]));
//     console.log(typeof(finalResult) );

//     console.log(finalResult );


// 	var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// var result3 = Object.entries(obj);

// console.log(result3);



// displayGames()
	// fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
	// 	.then(response => response.json())
	// 	.then(response => console.log(response))
	// 	.catch(err => console.error(err));


