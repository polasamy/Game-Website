import { UI } from "./ui.module.js";
//class for displaying details of a specific game
export class displayData {

    async getGameData(id) {
        //start te loading screen
        let load = document.querySelector(".loading")
		load.classList.remove("d-none")
        //method for fetching the data that the API provided
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '04ed4cab30msh4ca0752f5dd6e3dp1cc039jsne76aa86b3af3',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        //get the results from the API
        let result = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        //convert the data into its original form
        let finalResult = await result.json();
        //creat an instance from the display details 
        let showData = new UI
        let body = document.querySelector("body")
        //we hide the oveflow of the body to hide the scroll bar
        body.classList.add("overflow-hidden")
        //call the method responsible for displaying the data that we got from the API
        showData.displayGameData(finalResult)
        let deatailsBox = document.querySelector(".details")
        //using DOM we cathc the cancel button
        let closes = document.querySelector(".buttonClose")
        closes.addEventListener("click", () => {
            // on clicking the bbutton remove the details box that was showing the game details
            deatailsBox.classList.add("d-none")
            //remove the hidden overflow from the body to make the scroll bar appear again
            body.classList.remove("overflow-hidden")
        })
        //remove loading screen
        load.classList.add("d-none")
    }
}