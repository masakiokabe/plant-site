//これは全然関係ない
//slide functionをjsで書いただけ
var Slide = document.getElementById("Slide")
var BackBtn = document.getElementById("BackBtn")
var NextBtn = document.getElementById("NextBtn")

var Slide = new Array(
    "../assets/img/pic1.jpg",
    "../assets/img/pic2.jpg",
    "../assets/img/pic3.jpg",
    "../assets/img/pic4.jpg",
)

NextBtn.onclick = function(){
    if(i < 3){
        Slide.src = slideimages[i +1];
        i ++;
    }
    
}

BackBtn.onclick = function(){
    if(i > 3){
        Slide.src = slideimages[i -1];
        i --;
    }
    
}