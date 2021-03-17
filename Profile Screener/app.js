const profiles = [

 {
  id:1,
  name:"Ashay Bapat",
  profileImageUrl:"img/1.jpg",
  Job:"Front-end Developer",
  description:`Creative Front-End Developer offering 9+ years of experience providing 
  high-impact web solutions for diverse industry organizations. Skilled in designing, 
  developing and testing multiple web-based applications incorporating a range of technologies. 
  Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.`
},


  { 
    id:2,
    name:"Atharva Bhadbhade",
    profileImageUrl:"img/2.jpg",
    Job:"Full Stack Developer",
    description:`Full Stack Developer with 6+ years of hands-on experience designing, developing, 
    and implementing applications and solutions using a range of technologies and programming languages.
     Seeking to leverage broad development experience and hands-on technical expertise in a challenging 
     role as a Full-stack Developer.`
  },

  {
    id:3,
    name:"Rohit Malviya",
    profileImageUrl:"img/3.jpg",
    Job:"Web Developer",
    description:`Hard-working web developer with a flair for creating elegant solutions in the least 
    amount of time. Developed an ecommerce webapp, customer web portal, documentary launch website, 
    and donations webapp for a local charity. Passionate about software architecture and cloud computing.
     Regular attendee of web developer meetups and hackathons.`
  },

  {
    id:4,
    name:"Shubham Malusare",
    profileImageUrl:"img/4.jpg",
    Job:"Android developer",
     description:`Analytical and detail oriented Android app developer professional with stellar communication
      skills. Adept at bringing all team members together to reach a common goal on time and under budget. 
      Conceptualizing app solutions with the latest technology, design theory, and a large dose of creativity. 
     `
  },
 




];


let nameOfEmployee = document.getElementById('name');
let image = document.getElementById('img');
let job = document.getElementById('job');
let skills  = document.getElementById('skills');

// Buttons 

let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

// showProfile(currentIndex);
window.addEventListener('DOMContentLoaded',function(){
   showProfile(currentIndex);

});

function showProfile(index) {
   let currentPerson = profiles[index];
   nameOfEmployee.textContent = currentPerson.name ;
   image.src = currentPerson.profileImageUrl;
   job.textContent = currentPerson.Job;
   skills.textContent = currentPerson.description;
}

nextBtn.addEventListener('click',() => {
   currentIndex++;
    if(currentIndex > profiles.length - 1 ) {
        currentIndex = 0;
    }
    showProfile(currentIndex);

});

prevBtn.addEventListener('click',() => {
    currentIndex--;
    if(currentIndex < 0 ) {
        currentIndex = profiles.length - 1 ;
    }
    showProfile(currentIndex);

});