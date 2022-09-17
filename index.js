const zodiac = document.getElementById("zodiac")
const body = document.body;


const changeBackground = ()=>{
    switch(zodiac.value){
        case "aries":
            body.style.backgroundColor = "Orange";
            break;
        case "tarus":
            body.style.backgroundColor = "green";
            break;
        case "gemini":
            body.style.backgroundColor = "skyBlue";
            break;
        case "cancer":
            body.style.backgroundColor = "lawnGreen";
            break;
        case "leo":
            body.style.backgroundColor = "brown";
            break;
        case "vigro":
            body.style.backgroundColor = "darkBlue";
            break;
        case "libra":
            body.style.backgroundColor = "yellow";
            break;
        case "scorpio":
            body.style.backgroundColor = "aqua";
            break;
        case "sagittarius":
            body.style.backgroundColor = "deeppink";
            break;
        case "aquarius":
            body.style.backgroundColor = "lightGreen";
            break;
        case "capricorn":
            body.style.backgroundColor = "darkGrey";
            break;
        case "pisces":
            body.style.backgroundColor = "crimson";
            break;
            
        default:
            break;

    }
}