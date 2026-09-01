const statusText = document.getElementById("errors");
const resultsContainer = document.getElementById("results");
const loadButton = document.getElementById("button");


const getData = async () => {
    
    statusText.textContent = "Loading...";
    resultsContainer.innerHTML = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Something went wrong...");
            
        }

        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            resultsContainer.innerHTML += "<p>" + data[i].name + "</p>";
        }


        statusText.textContent = "Done!";


    } catch (error) {
        statusText.textContent = "Something went wrong..."
        
    }

};


loadButton.addEventListener("click", getData);