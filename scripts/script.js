document.getElementsByClassName("dogo-img")



    fetch("https://dog.ceo/api/breeds/image/random");
    .then(response =>response.json())
    .then(JSON=> dogo-img.src=JSON.message)
