var rectangle= document.querySelector("#rect")

rectangle.addEventListener("mousemove",function(details){
        var rectangleLocation = rectangle.getBoundingClientRect(); 
        var insideRectLeft = details.clientX- rectangleLocation.left
          if (insideRectLeft <rectangleLocation.width/2 )  {
           var redColor=  gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insideRectLeft)
            gsap.to(rectangle,{
                backgroundColor: `rgb(${redColor},0,0)`,
                ease:Power4
            })
          }else{
            var greenColor=  gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insideRectLeft)
            gsap.to(rectangle,{
                backgroundColor: `rgb(0,${greenColor},0)`,
                ease:Power4
            })
        }   
    })


rectangle.addEventListener("mouseleave",function(){
    rectangle.style.backgroundColor = "white";
})


