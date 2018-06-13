const h1Element = document.getElementById('title');
const pElement = document.getElementById('desc');

let promise = fetch('https://api.nasa.gov/planetary/apod?api_key=qVOGvrjVQ2CboR6dZeMWglkak6040flvWYJ9z7Ce').then(response=> response.json())
.then((data) =>{
   h1Element.innerHTML = data.title;
   pElement.innerHTML = data.explanation;
   console.log(data);
 })
.catch(err => console.log(err));
