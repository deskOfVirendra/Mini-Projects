const timeElement = document.getElementById('time');

setInterval(function() {
    let date = new Date();
    
    let hours = date.getHours();
    let merediem = (hours < 12) ? 'AM' : 'PM'; 
    if(hours > 12) hours -= 12 ;
    let minutes = date.getMinutes();
    minutes = (minutes < 10) ? '0'+minutes : minutes;
    let seconds = date.getSeconds();
    seconds = (seconds < 10) ? '0'+seconds : seconds;

    timeElement.innerText = `${hours}:${minutes}:${seconds}: ${merediem}`;
},1000);