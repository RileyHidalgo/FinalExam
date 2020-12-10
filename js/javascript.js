let label = document.querySelector('#labels')
let textArea = document.querySelector('#effect')
let submitBtn = document.querySelector('#btn')
let thumbArea = document.querySelector('#thumb-bar')
label.style.display ='none';
textArea.style.display ='none';
submitBtn.style.display ='none';
thumbArea.addEventListener('mouseover', mouseOver)
function mouseOver(event){
    label.style.display ='';
    textArea.style.display ='';
    submitBtn.style.display ='';

}
