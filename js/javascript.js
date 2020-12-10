let label = document.querySelector('#labels')
let textArea = document.querySelector('#effect')
let submitBtn = document.querySelector('#btn')
let thumbArea = document.querySelector('#thumb-bar')
let displayImg = document.querySelector('.displayed-img')

label.style.display ='none';
textArea.style.display ='none';
submitBtn.style.display ='none';


// let imgArray = new Array();
// imgArray[0] = new Image();
// imgArray[0].src = '../images/pic1.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = '../images/pic2.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = '../images/pic3.jpg';

// imgArray[3] = new Image();
// imgArray[3].src = '../images/pic4.jpg';

// imgArray[4] = new Image();
// imgArray[4].src = '../images/pic5.jpg';

// function imgArray() {
//     for (i = 0; i < imgArray.length; i++) {
//         displayImg.appendChild(imgArray[i]);
//     }
// };
thumbArea.addEventListener('mouseover', mouseOver)
function mouseOver(){
    label.style.display ='';
    textArea.style.display ='';
    submitBtn.style.display ='';
    if (mouseOver = document.getElementById("pic1")){
        document.getElementById("displayed-img").src = 'file:///C:/Users/hidal/FinalExam/images/pic1.jpg';
    }
        else if (mouseOver = document.getElementById("pic2")){
            document.getElementById("displayed-img").src = 'file:///C:/Users/hidal/FinalExam/images/pic2.jpg';
    }
            else if (mouseOver = document.getElementById("pic3")){
                document.getElementById("displayed-img").src = 'file:///C:/Users/hidal/FinalExam/images/pic3.jpg';
    }
                else if (mouseOver = document.getElementById("pic4")){
                    document.getElementById("displayed-img").src = 'file:///C:/Users/hidal/FinalExam/images/pic4.jpg';
    }
                    else if (mouseOver = document.getElementById("pic5")){
                        document.getElementById("displayed-img").src = 'file:///C:/Users/hidal/FinalExam/images/pic5.jpg';
    }
}
let imgArray = []
function imageLoop(){
    let image1 = document.getElementById("pic1")
    imgArray.push(image1)
    let image2 = document.getElementById("pic2")
    imgArray.push(image2)
    let image3 = document.getElementById("pic3")
    imgArray.push(image3)
    let image4 = document.getElementById("pic4")
    imgArray.push(image4)
    let image5 = document.getElementById("pic5")
    imgArray.push(image5)
}


submitBtn.addEventListener('click', submitClick)
function submitClick(){
    if (textArea.value === 'blur'){
        document.getElementById("pic1").src = 'file:///C:/Users/hidal/FinalExam/images/pic1B.jpg';
        document.getElementById("pic2").src = 'file:///C:/Users/hidal/FinalExam/images/pic2B.jpg';
        document.getElementById("pic3").src = 'file:///C:/Users/hidal/FinalExam/images/pic3B.jpg';
        document.getElementById("pic4").src = 'file:///C:/Users/hidal/FinalExam/images/pic4B.jpg';
        document.getElementById("pic5").src = 'file:///C:/Users/hidal/FinalExam/images/pic5B.jpg';

        textArea.value = '';
    } else {
        alert("Wrong input!")
        textArea.value = '';
    }
}

