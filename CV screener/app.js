const data = [
    
        {
            name: 'Atharva Bhadbhade',
            age: 20,
            city: 'Aurangabad',
            language: 'Javascript',
            framework: 'React',
            image: 'https://randomuser.me/api/portraits/men/51.jpg'
        },
    
        {
            name: 'Shubham Malusare',
            age: 20,
            city: 'Pune',
            language: 'JavaScript',
            framework: 'Angular',
            image: 'https://randomuser.me/api/portraits/men/54.jpg'
        },
    
        {
            name: 'Ashay Bapat',
            age: 18,
            city: 'Sangli',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/men/55.jpg'
        },
    
        {
            name: 'Rohit Malviya',
            age: 20,
            city: 'Mumbai',
            language: 'Javascript',
            framework: 'NodeJS',
            image: 'https://randomuser.me/api/portraits/men/57.jpg'
        },
    
        {
            name: 'Raj Hake',
            age: 34,
            city: 'Nagpur',
            language: 'Go',
            framework: 'Go Framework',
            image: 'https://randomuser.me/api/portraits/men/61.jpg'
        }

];

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next : function() {
            return  nextIndex < profiles.length ? {value:profiles[nextIndex++],done:false} : {done:true}
        }
    };
}

const candidates = cvIterator(data);
nextCV();




const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    
    if(currentCandidate != undefined) {
    //    console.log(currentCandidate);
       const image = document.getElementById('image');
       const profile = document.getElementById('profile');
        image.innerHTML = ` <img src="${currentCandidate.image}" alt="Profile" >`;
             profile.innerHTML = `
            
             <ul class="list-group list-group-flush">
             <li class="list-group-item">${currentCandidate.name}</li>
             <li class="list-group-item">${currentCandidate.age} Year Old.</li>
             <li class="list-group-item">Now Living in ${currentCandidate.city}</li>
             <li class="list-group-item">Master in ${currentCandidate.language} language and perfectionist in ${currentCandidate.framework}</li>

           </ul>`;
    } else {
        // console.log('unable to show data');
        location.reload();
    }
}

