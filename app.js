let indexValue = 1;
showImg(indexValue);
function btn_slider(e){showImg(indexValue = e);}
function side_slider(e){showImg(indexValue += e);}
function showImg(e){
    let i;
    const img = document.querySelectorAll('img');
    const slider = document.querySelectorAll('.btn-slider span');
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for(i = 0; i < slider.length; i++){
        slider[i].style.background = "rgba(255,255,255,0.1)";
    }
    img[indexValue-1].style.display = "block";
    slider[indexValue-1].style.background = "white";
}
