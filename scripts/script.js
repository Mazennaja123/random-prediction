document.getElementsByClassName("dogo-img");
generate_query=document.querySelector(".generate_btn");
get_age=document.getElementsByClassName("age_number");
get_gender=document.getElementsByClassName("gender_type");
get_nationality=document.getElementsByClassName("nationality_id");
get_nationality2=document.getElementsByClassName("nationality_id2");
get_dog_image_query=document.querySelector(".dogo-img");
generate_query.addEventListener("click",generating_prediction);








    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response=> response.json())
    .then((data) => {
      get_dog_image_query.src=data.message;
    })



function generating_prediction()
{


  fetch("https://api.genderize.io/?name=rio")
  .then(response=> response.json())
  .then((data) => {
  get_gender[0].innerHTML=data.gender

  })





  fetch("https://api.agify.io/?name=nour")
  .then(response=> response.json())
  .then((data) => {
get_age[0].innerHTML=data.age

})

fetch("https://api.nationalize.io/?name=mohamad")
.then(response=> response.json())
.then((data) => {
get_nationality[0].innerHTML=data.country[0].country_id
get_nationality2[0].innerHTML=data.country[1].country_id
})




}
