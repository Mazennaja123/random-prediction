document.getElementsByClassName("dogo-img");
generate_query=document.querySelector(".generate_btn");
generate_query.addEventListener("click",generating_prediction);



    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response=> response.json())
    .then((data) => {
      console.log(data)
    })

function generating_prediction()
{
console.log("test")

}
