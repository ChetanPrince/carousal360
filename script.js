const prev = document.querySelector(".nav .prev");
const next = document.querySelector(".nav .next");
const container = document.querySelector(".container");
const slideImages = document.querySelectorAll(".container-images img");
const buttons = document.querySelectorAll(".buttons-div .button") 
let counter = 0;

function indicators(){
    for(let i=0; i<buttons.length; i++){
        buttons[i].className = buttons[i].className.replace("active" , "");
    }
    buttons[counter].className += " active";
}

function slideNext(){
    slideImages[counter].style.animation = "next1 2s ease-in-out forwards";
    if(counter>=slideImages.length - 1 ){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = "next2 2s ease-in-out forwards";
    indicators();
}

function slidePrev(){
    slideImages[counter].style.animation = "prev1 2s ease-in-out forwards";
    if(counter == 0 ){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = "prev2 2s ease-in-out forwards";
    indicators();
}
function autoSlide(){
    deletInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSlide();

function switchImage(currentImage){
    currentImage.classList.add("active");
    const imageId = currentImage.getAttribute("attr");

    if(imageId>counter){
       slideImages[counter].style.animation = "next1 2s ease-in-out forwards";
       counter = imageId;
       slideImages[counter].style.animation = "next2 2s ease-in-out forwards";
    }else if(imageId == counter){
        return;
    }
    
    else{
        slideImages[counter].style.animation = "prev1 2s ease-in-out forwards";
    counter = imageId;
    slideImages[counter].style.animation = "prev2 2s ease-in-out forwards";
    indicators();
    }

}

    container.addEventListener("mouseover",()=>{
        clearInterval(deletInterval);
    })
    container.addEventListener("mouseout",autoSlide);
