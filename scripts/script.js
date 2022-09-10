document.getElementsByClassName("dogo-img");
generate_query=document.querySelector(".generate_btn");
getdogimage_query=document.querySelector(".dogo-img");
generate_query.addEventListener("click",generating_prediction);



    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response=> response.json())
    .then((data) => {

      var dogimage=data.message;
      console.log(dogimage)
      getdogimage_query.src=dogimage

    })



function generating_prediction()
{
console.log("test")

}
