document.getElementById("submit-btn").addEventListener("click", function() {

    const choice = document.getElementById("user-input").value;
    document.getElementById("section2").classList.add("show");
    document.getElementById("section3").classList.add("show");
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=CsNoU4DZ0LTaFOocg6twcos47Zjv0BZwZJ0HWQBg&date=${choice}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.media_type === 'image') {
            document.querySelector("#nasa-img").src = data.hdurl
            document.getElementById("nasa-vid").style.display = "none"

        } else if (data.media_type === 'video') {
            document.getElementById("nasa-img").style.display = "none"
            document.querySelector("iframe").src = data.url
        }
        document.querySelector("#nasa-info").innerText = data.explanation
    })
    
    
    .catch(err => console.log(`error ${err}`));
  });