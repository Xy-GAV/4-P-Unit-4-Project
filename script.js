let tbText = "tut";
let textCounter = 0

document.addEventListener('keyup' , (e) => {
    if(e.keyCode === 13 || e.keyCode === 32){
        textCounter+=1
        cutscene1
        console.log(textCounter)
    }
})

console.log(tbText);

function cutscene1(){
    if(textCounter == 1){
        tbText="text 1"
        console.log(textCounter)
    }
    else if(textCounter == 2){
        tbText="text 2"
        console.log(textCounter)
    }
}

    const textbox = document.querySelector('#textbox');
    textbox.textContent = tbText;