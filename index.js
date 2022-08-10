const BASE_URL='https://www.officeapi.dev/api'

function getData(url) {
    fetch(url)
  .then(response => response.json())
  .then(data => {
   data.data.forEach(element => {
       renderOneQuote(element)
   }); 
  });
}

getData(`${BASE_URL}/quotes`)


function renderOneQuote(quoteObject) {
    let quoteContainer = document.getElementById(quoteObject.character.firstname);
    // getting the li element who's id macthes the character's name from the quote object
    console.log(quoteObject)
    const quoteCard = document.createElement('div')
    quoteCard.classList.add('comment')
    // added comment class to quote-card
    const quoteHeading = document.createElement('h4')
    quoteHeading.innerText = quoteObject.content 
    // step one : append quote heading to quote card
  quoteCard.append(quoteHeading)
    // step two: append quote card to quote container
  quoteContainer?.append(quoteCard)
// ? checks if quote-container is defined, IF it is it will add the quote
}
function renderCharacters(charactersArray) {
  const ul = document.getElementById('character-container')
charactersArray.forEach(function(character){
  const char = document.createElement('li')
  char.id = character.split(' ')[0]
  // gave the li element the id of the character's first name
  

char.innerText = character
char.addEventListener('click', () => {
  char.classList.toggle('show-comments')
  // toggle the show-comments class on the character element when clicked
})
ul.append(char)
})
}
renderCharacters(['Dwight Schrute', 'Michael Scott', 'Creed Bratton','Pam Beesly', 'Angela Martin','Stanley Hudson', 'Oscar Martinez','Phyllis Lapin','Kelly Kapoor','Gabe Lewis', 'Toby Flenderson', 'Andy Bernard', 'Kevin Malone', 'Erin Hannon','Ryan Howard'])
// const a = document.createElement('a');
// document.getElementsByTagName('li')[0].appendChild(a);
// console.log(document.getElementByTagName('li'))
//  let like = document.getElementById('button');
//  like.addEventListener('click', function() {
//   });
//   function eventHandlerFunction() {
//   varlike = document.getElementById('button')
//  }
// like.addEventListener('click', eventHandlerFunction);

// let likeNum = document.getElementsById('likes');
// likeNum.addEventListener('like',function() {
//  function eventHandlerFunction() {
// var likeNum = document.getElementById('likes')
// console.log(likeNum = 'click'+1)
//  }
//  })

