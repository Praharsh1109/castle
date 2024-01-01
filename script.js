var rectangle= document.querySelector("#rect")

rectangle.addEventListener("mousemove",function(details){
        var rectangleLocation = rectangle.getBoundingClientRect(); 
        var insideRectLeft = details.clientX- rectangleLocation.left
          if (insideRectLeft <rectangleLocation.width/2 )  {
            rectangle.style.backgroundColor = "red";
          }else{
            rectangle.style.backgroundColor = "Blue";
          }
            
})

rectangle.addEventListener("mouseleave",function(){
    rectangle.style.backgroundColor = "white";
})
