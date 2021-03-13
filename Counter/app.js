let count = 0;

const counterDisplay = document.querySelector('#counterDisplay');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener('click',function(event) {
        const styles = event.currentTarget.classList;
      if(styles.contains('decrease')) {
          count--;
      } else if(styles.contains('increase')) {
        count++;
      } else {
          count = 0;
      }

      counterDisplay.style.color = (count > 0) ? '#00FF00' : '#FF0000'; 
       
       if(count == 0) counterDisplay.style.color = '#000';
      counterDisplay.innerText = count;

    });
});
