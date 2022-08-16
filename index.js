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

    console.log(quoteObject)
    const quoteCard = document.createElement('div')
    quoteCard.classList.add('comment')
 
    const quoteHeading = document.createElement('h4')
    quoteHeading.innerText = quoteObject.content 
  
  quoteCard.append(quoteHeading)
 
  quoteContainer?.append(quoteCard)

}
function renderCharacters(charactersArray) {
  const div = document.getElementById('character-container')
charactersArray.forEach(function(character){
  const char = document.createElement('div')
  char.id = character.split(' ')[0]

  

char.innerText = character

char.addEventListener('click', () => {
  
  char.classList.toggle('show-comments')
  

})
div.append(char)
})
}


renderCharacters(['Dwight Schrute', 'Michael Scott', 'Creed Bratton','Pam Beesly', 'Angela Martin','Stanley Hudson', 'Oscar Martinez','Phyllis Lapin','Kelly Kapoor','Gabe Lewis', 'Toby Flenderson', 'Andy Bernard', 'Kevin Malone', 'Erin Hannon','Ryan Howard'])
const btn = document.querySelector('#btn');
          const selectButton = document.querySelector('custom-select')
          btn.onclick = (event) => {
              event.preventDefault();
              [].filter.call(sb.options, option => option.selected)
              alert(selectButton.selectedIndex);
          };
function addItem(){
const ulCharacters = document.getElementById('character-container'); 
            var li = document.createElement('li');//li
        
        const checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.value = 1;
                checkbox.name = "todo[]";
        
            li.appendChild(checkbox);
        
            var text = document.getElementById('texto');
            li.appendChild(document.createTextNode(text.value));
            ul.appendChild(li); 
        }
        
        var button = document.getElementById('btn');
        button.onclick = addItem;
