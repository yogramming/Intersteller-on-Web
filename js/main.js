// document.querySelector("button").addEventListener("click", getData);

// function getData() {
//     let choice = document.querySelector("input").value;

    // fetch(`https://api.nasa.gov/planetary/apod?api_key=CsNoU4DZ0LTaFOocg6twcos47Zjv0BZwZJ0HWQBg&date=${choice}`)
    // .then(res => res.json())
    // .then(data => {
    //     data.date = choice;
    //     console.log(data)
    //     // document.querySelector("h2").innerText = data.drinks[0].strDrink
    //     // data.date = date;
    //     document.querySelector("img").src = data.hdurl
    //     document.querySelector("h3").innerText = data.explanation
    // })
    
    // .catch(err => console.log(`error ${err}`));


// }

document.getElementById("submit-btn").addEventListener("click", function() {

    const choice = document.getElementById("user-input").value;
    document.getElementById("section2").classList.add("show");
    document.getElementById("section3").classList.add("show");
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=CsNoU4DZ0LTaFOocg6twcos47Zjv0BZwZJ0HWQBg&date=${choice}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("#nasa-img").src = data.hdurl
        document.querySelector("#nasa-info").innerText = data.explanation
    })
    
    
    .catch(err => console.log(`error ${err}`));
  });