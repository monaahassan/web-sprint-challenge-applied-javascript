// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'
const cards = document.querySelector('.cards');
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(/*takes a callback*/ response => {
  const pleaseWork = sprint(response.data);
  cards.appendChild(pleaseWork);
  // cards.append(sprint(pleaseWork))
})
.catch (err => {
  console.log("this is not working",err);
})
function sprint(object){
  //instantiate the elements
  const card = document.createElement('card')
  const headLine = document.createElement('headline')
  const author = document.createElement('author')
  const img = document.createElement('imgContainer')
  const span = document.createElement('span') // User's user name
  
 //set class names
  card.classList.add('card')
  headLine.classList.add('headline')
  author.classList.add('author');
  img.classList.add('img')
  span.classList.add('span')
//set textContent and attributes
//   cardImg.src = object.avatar_url // this is from HTTPie
//   H3.textContent = object.name;// SOMETHING WITH name;
  
  //create the hierarchy - append to the DOM
  divCard.appendChild(card)
  divCard.appendChild(divCardInfo)
  divCard.appendChild(H3)
  return divCard;
} console.log(gitHubFunction());


// const firstCard = document.querySelector('.card');

// firstCard.addEventListener('mouseenter', function(){
//     firstCard.style.transform = "scale(1.4)";
//     firstCard.style.transtion = "transform 1s";
// })
// firstCard.addEventListener('mouseleave', function(){
//     firstCard.style.transform = "scale(1)";
// })
// const headLine = document.querySelector(".headline");
// console.log(headLine);