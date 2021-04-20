const body = document.body;
const string = document.querySelector('#string');
const checkBtn = document.getElementById('clickBtn');

checkBtn.addEventListener('click',()=> {
   let inputString = string.value;
   inputString = inputString.replace(/[^a-zA-Z0-9]/g ,'');
   let reversedString = inputString.split('').reverse().join('');
   console.log(reversedString);
   inputString === reversedString ? body.style.backgroundColor='#6AE000' : body.style.backgroundColor='#8b0101';
//    console.log(inputString);
})
