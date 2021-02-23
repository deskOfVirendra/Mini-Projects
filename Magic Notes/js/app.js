console.log('welcome to Magic Notes app');
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addtxt');
    let addTitle = document.getElementById('addTitle');
    if (addTxt.value == "" || addTitle.value == "") alert("Note can not be empty");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let notesItem = { title: addTitle.value, text: addTxt.value };
    notesObj.push(notesItem);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = ""
    //console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
    <div class="card mx-2 my-2 notecard" style="width: 18rem;">
           
    <div class="card-body">
      <h5 class="card-title">${index + 1}.${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete</button>
    </div>
  </div>
    `;


    });


    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = 'No Notes Available..!';
    }

}


function deleteNote(index) {
    console.log(index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);

    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}


document.getElementById('search').addEventListener('input', function () {
    let searchTxt = document.getElementById('search').value;
    //console.log(searchTxt);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(searchTxt)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }


    });

});