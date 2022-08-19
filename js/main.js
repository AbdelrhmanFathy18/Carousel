var imgs = Array.from(document.querySelectorAll("img"));
var closeI = document.getElementById("close");
var  next = document.getElementById("next") ;
var boxInner =document.getElementById("boxInner");
var prev = document.getElementById("prev");
var boxContainer=document.getElementById("boxContainer")
var currentIndex = 0;
console.log(imgs);
for(var i= 0; i < imgs.length;i++){
    imgs[i].addEventListener("click",function(event){
        boxContainer.style.display = "flex";
        currentIndex = imgs.indexOf(event.target);
        console.log(imgs.indexOf(event.target))
        var imgSrc = event.target.getAttribute("src");
        boxInner.style.backgroundImage = `url(${imgSrc})`
    });
} 
closeI.addEventListener("click",closeDiv);
next.addEventListener("click",nextElement);
prev.addEventListener("click",prevElement);
function nextElement(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    boxInner.style.backgroundImage = `url(${imgSrc})`
}
function prevElement(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    boxInner.style.backgroundImage = `url(${imgSrc})`
}
function closeDiv(){
    boxContainer.style.display = "none";
}
document.addEventListener("keyup",function(event){
    console.log(event);
    if(event.code=="ArrowLeft"){
        prevElement();
    }
    else if(event.code=="ArrowRight"){
        nextElement();
    }
    else if(event.code=="Escape"){
        closeDiv()
    }
});











// var path = Array.from(document.querySelectorAll("path"));
//     var currentIndex = 0;
//     console.log(path);
//     for(var i= 0; i < path.length;i++){
    
//     path[i].addEventListener("click",function(event){
//         console.log(event)
//         var imgSrc = event.target.getAttribute("name");
//         console.log(imgSrc);

//     });
//     }