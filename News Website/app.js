// IT WILL WORK ON LOCALHOST ONLY.TO RUN ON SERVER YOU HAVE TO PAY FOR PREMIUM PLANS.
const newsContainer = document.getElementById('newsContainer');
const apiKey = '119168c142684b23960f8b3f8d7c12d9';
new Promise(function(resolve,reject) {

let request = new XMLHttpRequest();
request.open('GET',`http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
request.onload = () => {
    if(request.status === 200){
       resolve(request.responseText)
    }else{
       reject('Unable to get News')
    }
}
request.send();
}).then(function(response){
    let parsedResponse  = JSON.parse(response);
//    document.getElementById('showNewsID').innerHTML = `${response}`;
console.log(parsedResponse.articles);
Array.from(parsedResponse.articles).forEach(elt => {
   if(elt['urlToImage']) {
    let date = elt['publishedAt'].split('T');
    let time = elt['publishedAt'].split('T')[1].split(':');
    newsContainer.innerHTML += `
    <a href="${elt['url']}">
    <div class="card">
    <img src="${elt['urlToImage']}" class="card-img-top" alt="No Image Available">
    <div class="card-body">
      <h5 class="card-title">${elt['title']}</h5>
      <p class="card-text">${elt['description']}</p>
      <p class="card-text"><small class="text-muted">published at ${date[0]} ${time[0]}:${time[1]}       ${elt['source']['name']}</small></p>
    </div>
  </div>
  </a>
    
    
    
    `;
   }
});


}).catch(function(error){alert(error)});
