const colorDisplay = document.getElementById('color');
const clickBtn = document.getElementById('clickBtn');
const hexArray = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


clickBtn.addEventListener('click',function() {
    let hexColor = "#";
    for(let i=0;i<6;i++) {
        const randomNumber = getRandomNumber();
        hexColor += hexArray[randomNumber];
        console.log(hexColor);
    }
    
    colorDisplay.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
  
});

function getRandomNumber() {
    return Math.floor(Math.random() * hexArray.length);
}