let cl=console.log;
var request = document.getElementById("imagecontainer");

var imgArray = [
  "https://source.unsplash.com/random/vid" ,
  "https://source.unsplash.com/random/photo" ,
  "https://source.unsplash.com/random/college" ,
  "https://source.unsplash.com/random/school" ,
  "https://source.unsplash.com/random/colony" ,
  "https://source.unsplash.com/random/kitchen" ,
  "https://source.unsplash.com/random/home" ,
  "https://source.unsplash.com/random/arked" ,
  "https://source.unsplash.com/random/utensils" ,
  "https://source.unsplash.com/random/statue" ,
  "https://source.unsplash.com/random/road" ,
  "https://source.unsplash.com/random/tent" ,

];
result ="";
imgArray.forEach(function(ele){
result+= `
<div class="col-sm-4">
<div class="card">
  <div class="card-body">
    <img src="${ele}" class="img-fluid" alt="">
  </div>
</div>
</div>`
})
request.innerHTML= result;