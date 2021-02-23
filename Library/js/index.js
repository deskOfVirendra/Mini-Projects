
// Method to create a new book
function createBook(name, author, type) {

    this.name = name;
    this.author = author;
    this.type = type;

}


// Just created a empty method library
function Library() {

}

// a method add used to add a book to localStorage
Library.prototype.add = function (book) {
    // console.log('adding to ui');
    let tableDataItems = localStorage.getItem('table');
    let tableDataItemsArray;
    if (!tableDataItems) {
        tableDataItemsArray = [];
    }
    else {
        tableDataItemsArray = JSON.parse(tableDataItems);
    }

    tableDataItemsArray.push(book);
    let tableDataItemsString = JSON.stringify(tableDataItemsArray);
    localStorage.setItem('table', tableDataItemsString);
    // console.log('added to localStroage');
    this.showData();


}


// a method showData used to display all the books from localStorage
Library.prototype.showData = function () {
    // console.log('showing the table');
    let tableBody = document.getElementById('tableBody');
    let uiString = "";
    let tableDataItems = localStorage.getItem('table');
    for (let obj = 0; obj < JSON.parse(tableDataItems).length; obj++) {
        // console.log(obj);
        uiString += `<tr>
       <td scope="col">${JSON.parse(tableDataItems)[obj].name}</td>
       <td scope="col">${JSON.parse(tableDataItems)[obj].author}</td>
       <td scope="col">${JSON.parse(tableDataItems)[obj].type}</td>
       <td scope="col"><button class='btn btn-primary' style='background-color:red;border:1px solid red' id='deleteBtn'
        onclick='deleteBookMethod(${obj})'>Delete</button></td>
     </tr>`;
    }
    tableBody.innerHTML = uiString;
}

//create a method to delete book 
// create a new instance of library and call given to delete book method passing id as argument
//and then object is deleted
function deleteBookMethod(id) {
    let newLibrary = new Library();
    newLibrary.deleteBook(id);
    newLibrary.showData();
    delete newLibrary;
}


// method deleteBook to delete book from library
Library.prototype.deleteBook = function (id) {
    // console.log('deleting from the storage to ui');
    let tableDataItems = localStorage.getItem('table');
    let tableDataItemsArray = JSON.parse(tableDataItems);


    tableDataItemsArray.splice(id, 1);
    let tableDataItemsString = JSON.stringify(tableDataItemsArray);
    localStorage.setItem('table', tableDataItemsString);
    this.showData();
}

// method clear used to reset the form
Library.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// method validate to check whether inputs are proper or not
Library.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    return true;
}

// method show to display success or error in functioning
Library.prototype.show = function (type, msg) {
    let message = document.getElementById('message');
    message.innerHTML = `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                 <strong> Message : </strong> ${msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
    
                   `;
    setTimeout(() => {
        message.innerHTML = '';
    }, 5000);
}



let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

let library = new Library();
library.showData();




function libraryFormSubmit(e) {

    // console.log('you just submitted the form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let fictional = document.getElementById('fictional');
    let type;

    if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    } else if (fictional.checked) {
        type = fictional.value;
    } else {
        type = "";
    }

    let book = new createBook(name, author, type);
    // console.log(book);

    if (library.validate(book)) {
        library.add(book);
        library.clear();
        library.show('success', 'Your book has been successfully added');
    } else {
        library.show('danger', 'sorry you cannot add this book');
    }

    e.preventDefault();
}