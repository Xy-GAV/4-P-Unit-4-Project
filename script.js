const textBox = document.getElementById("textBox");
let speaker = "";
let speakerFull = "";
let typing = false;
let typeSpeed = 30;

let ct1Text = [
    " ",
    "Sleep isn\’t warm. The bodies beside you in rest were, but winter frost had taller fangs than the flickering warmth of life and beating heart.",
    " ",
    "Dawn broke in tints of green. Uncommon but not odd. Mornings like these always felt wired. Though your mind refused more slumber now that it\’d bore witnesses to the kiss of sun and horizon.",
    " ",
    "The chill of earth before the embrace of light carried through the wind but you didn\’t mind a walk.",
    " ",
    "A small body roiled beside you. And two tired eyes blinked up at you as you rose to your paws. Then four. Then six.",
    " ",
    "YrrwFl “Morning…”",
    "YrrwFl  ",
    "BlmSl “Hello, Yarrow\’Fall.”",
    "BlmSl  ",
    "A blip of platinum fur ascended into your vision as small claws took hold in your fur.",
    " ",
    "BlmSl “Don\’t hurt yourself, Soft\’Smoke”",
    "BlmSl  ",
    "She did not reply, only climbing higher until she was perched comfortably on your head. Family walk it was.",
    " ",
    "Small\’Spot and Black\’Wisp were their uncle\’s problems should they awake.",
    " ",
    "You. You were going on a walk.",
];

let textCounter = 0;

//----------------------------Variables----------------------------------------//


//When return pressed

document.addEventListener('keyup' , (e) => {
    if(e.keyCode === 13 || e.keyCode === 32){
        if(typing===false){
            console.log(typeSpeed);
            textCounter+=1
            nameTag();
            cutscene1();
            console.log(textCounter);
            typerep(document.getElementById('textBox'));
            console.log(typing);
        }
        
    }
})

// document.addEventListener('keyup' , (e) => {
//     if(e.keyCode === 69){
//         typeSpeed = 40;
//         console.log(typeSpeed);
//     }
// })

// document.addEventListener('keydown' , (e) => {
//     if(e.keyCode === 69){
//         typeSpeed = 10
//         console.log(typeSpeed);
//     } else{
//         typeSpeed = 40;
//         console.log(typeSpeed);
//     }
// })

//--------------------Functions------------------------------------------//

function typerep(Element){
    typing = true;
    let i = 0;
    const Text = document.getElementById("textBox").textContent;
    $("#textBox").text("");
    console.log(Text)

    const IntervalID = setInterval(function(){
        Element.innerHTML+= Text[i];
        i++;

        document.addEventListener('keyup' , (e) => {
            if(typing=true && e.keyCode === 13 || e.keyCode === 32){
                clearInterval(IntervalID);
                $("#textBox").text("");
                Element.innerHTML = Text;
                i = 0;
                typing=false
                console.log(i)
                return;
            }
        })
        

        if(i === Text.length){
             console.log(i)
            clearInterval(IntervalID);
            typing=false
        }

    },typeSpeed)
}


function nameTag(){
    if(ct1Text[textCounter].includes("BlmSl")){

        console.log("Sol is talking");
        speaker = "BlmSl";
        
        speakerFull = "Blooming\'Sol";
        console.log(speakerFull);
    }
    else if (ct1Text[textCounter].includes("YrrwFl")){

        console.log("Yarrow is talking");
        speaker = "YrrwFl";
        
        speakerFull = "Yarrow\'Fall";
        console.log(speakerFull);
    }
    else if (ct1Text[textCounter].includes("LvBlm")){

        console.log("Lavender is talking");
        speaker = "LvBlm";
        
        speakerFull = "Lavender\'Bloom";
        console.log(speakerFull);
    }
    else {

        console.log("nobody is talking");
        speaker = "";
        
        speakerFull = "";
        console.log(speakerFull);
    };
    
    
}

function cutscene1(){
    // $("#textBox").text("");
    $("#textBox").text(ct1Text[textCounter].replace(speaker, ""));
    $("#nameTag").text(speakerFull)

    //$("#textBox").text(ct1Text[textCounter]);
}




function spriteManager(name){
spriteOneAngry(bloomingSol.png);
spriteTwoNull(blank.png);
};
//sprite one expressions//
function spriteOneAngry (characterimg){
document.getElementById("spriteBoxOne").src="characterimg";
document.getElementById("expressionBox").src="characterimg";
document.getElementById("expressionBox").class = "angrypos";
};

function spriteOneNull (){
document.getElementById("spriteBoxOne").src="blank.png";
document.getElementById("expressionBox").src="blank.png";
};
//sprite two expressions




    //const textbox = document.querySelector('#textbox');
    //textbox.textContent = ct1Text;