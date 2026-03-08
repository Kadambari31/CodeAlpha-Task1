filterSelection("all")

function filterSelection(category){

let images = document.getElementsByClassName("filter")

for(let i=0;i<images.length;i++){

images[i].classList.remove("show")

if(category == "all" || images[i].classList.contains(category)){
images[i].classList.add("show")
}

}

}

function openLightbox(img){

document.getElementById("lightbox").style.display="flex"
document.getElementById("lightbox-img").src = img.src

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none"

}