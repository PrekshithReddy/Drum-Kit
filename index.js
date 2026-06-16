//detecting button press
var noofDrumButton=document.querySelectorAll(".drum").length;
for(var i=0;i<noofDrumButton;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick()
{
    var buttonInnerHTML=this.innerHTML;
    makeSound( buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
}
//detecting keyboard press
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});
//This function is used for both keyboard press and also click 
//when we press on keyboard the parameter is passed from keypress 
//when we click on screen handleclick will be passing the paramtere to makeSound function.
function makeSound(key)
{
    switch(key)
    {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;

        default:alert("Enter correct key !!!");


    }
}
function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey);

    activeButton.classList.add("pressed"); 

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100);
}