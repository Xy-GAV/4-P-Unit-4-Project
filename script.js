const textBox = document.getElementById("textBox");
let speaker = ""
let speakerFull = ""

let ct1Text = [
    "",
    "BlmSl Sleep isn\’t warm. The bodies beside you in rest were, but winter frost had taller fangs than the flickering warmth of life and beating heart.",
    "Dawn broke in tints of green. Uncommon but not odd. Mornings like these always felt wired. Though your mind refused more slumber now that it\’d bore witnesses to the kiss of sun and horizon.",
    "The chill of earth before the embrace of light carried through the wind but you didn\’t mind a walk.",
    "A small body roiled beside you. And two tired eyes blinked up at you as you rose to your paws. Then four. Then six.",
    "“Morning…”",
    "“Hello, Yarrow\’Fall.”",
    "A blip of platinum fur ascended into your vision as small claws took hold in your fur.",
    "“Don\’t hurt yourself, Soft\’Smoke”",
    "She did not reply, only climbing higher until she was perched comfortably on your head. Family walk it was.",
    "Small\’Spot and Black\’Wisp were their uncle\’s problems should they awake.",
    "You. You were going on a walk.",
];

let textCounter = 0;

document.addEventListener('keyup' , (e) => {
    if(e.keyCode === 13 || e.keyCode === 32){
        textCounter+=1
        nameTag();
        cutscene1();
        console.log(textCounter);
    }
})


function nameTag(){
    //console.log("i here");
    //console.log("ct1Text[] " + ct1Text[textCounter]);
    if(ct1Text[textCounter].includes("BlmSl")){

        console.log("Sol is talking");
        speaker = "BlmSl";
        
        speakerFull = "Blooming\'Sol";
        console.log(speakerFull);
        
        //$("#nameTag").text(ct1Text[textCounter]);
        //console.log(document.getElementById("textBox").textContent.replace("BlmSl",""))
        //document.getElementById("textBox").textContent.replace("BlmSl", "");
        //ct1Text[textCounter].replace("BlmSl", "");
        //console.log(ct1Text[textCounter].replace("BlmSl", ""))
    };
    
}

function cutscene1(){
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