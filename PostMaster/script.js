let paramterCount=1;


let paramsBox = document.getElementById('parametersBox');
let requestJsonBox = document.getElementById('requestJsonBox');

let jsonRadio = document.getElementById('jsonRadio');
let paramsRadio = document.getElementById('paramsRadio');
// we are hiding parameters box initially
paramsBox.style.display = 'none';

jsonRadio.addEventListener('click',() => {
    requestJsonBox.style.display = "block";
    paramsBox.style.display = 'none';
});

paramsRadio.addEventListener('click',() => {
    requestJsonBox.style.display = "none";
    paramsBox.style.display = 'block';
});

//adding more paramerters boxes
let addParam = document.getElementById('addParam');

addParam.addEventListener('click',() => {
    let params = document.getElementById('params');
   let string = ` <div class="form-row my-2">
   <label for="url" class="col-sm-2 col-form-label">Parameter ${paramterCount+1}</label>
   <div class="col-md-4">
       <input type="text" class="form-control" id="parameterKey${paramterCount+1}" placeholder="Enter Parameter ${paramterCount+1} Key">
   </div>
   <div class="col-md-4">
       <input type="text" class="form-control" id="parameterValue${paramterCount+1}" placeholder="Enter Parameter ${paramterCount+1} Value">
   </div>
   <button  class="btn btn-primary deleteparam"> - </button>
</div>`;
let newParaElement = document.createElement('div');
newParaElement.innerHTML = string;
params.appendChild(newParaElement);

//to delete parameters
let deleteparam = document.getElementsByClassName('deleteparam');
for(elt of deleteparam) {
    elt.addEventListener('click',(e) => {
        e.target.parentElement.remove();
    })
}
paramterCount++;
});


let submit = document.getElementById('submit');
submit.addEventListener('click',()=> {
    document.getElementById('responseJsonText').value = 'Fetching response...!';
    let url = document.getElementById('urlField');
let requestType = document.querySelector("input[name='requestType']:checked");
let contentType = document.querySelector("input[name='contentType']:checked");
    console.log(url.value + " " + requestType.value + " " + contentType.value);
    if(contentType.value == 'params') {
      
     data={};
    for(i=0;i<paramterCount;i++) {
        // if(document.getElementById('parameterKey'+(i+1)) != undefined) {
     
         let key =  document.getElementById('parameterKey'+(i+1)).value;
         let value =  document.getElementById('parameterValue'+(i+1)).value;
       
           data[key] = value;
        // }
        
    }
    
   
}else {
    data = document.getElementById('requestJsonText').value;
}
//  console.log(data);


if(requestType.value=='GET'){
    fetch(url.value ,{method:'GET'}) 
        .then(response => response.text())
           .then((dataFetched) =>  document.getElementById('responseJsonText').value=dataFetched)
}
else {
    fetch(url.value ,{method:'POST',
    body:data,
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
}) 
        .then(response => response.text())
           .then((dataFetched) =>  document.getElementById('responseJsonText').value=dataFetched)
}
});