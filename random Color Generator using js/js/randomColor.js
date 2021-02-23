// console.log('welcome to randomColor js')

const btn = document.getElementById('btn');

btn.addEventListener('click',function() {
    let firstDiv = document.getElementsByClassName('first')[0];
    const Color = '#' + Math.floor(Math.random() * 16777256).toString(16);
    document.getElementById('hex').innerHTML = Color;
   firstDiv.style.backgroundColor = Color;

});
    