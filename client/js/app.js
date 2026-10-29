const sampleItemCount = 6;
const projectTitle = "Andrew Powers Favorite Games Project";
const terrariaRating = 9.9;
const persona5RoyalRating = 9.7;
const mistriaRating = 9.1;
const silksongRating = 9.7;
const isaacRating = 9.7;
const ex33Rating = 10;


const calculateAverage = (...numbers) => {
  return numbers.reduce((sum, val) => sum + val, 0) / numbers.length;
};


const averageScore = calculateAverage(terrariaRating, persona5RoyalRating, mistriaRating, silksongRating, isaacRating, ex33Rating);

const stringTemplateExample = `The current average score of all games is ${averageScore}`;


console.log("This is a project for me to create a list of my favorite games. I intend to create some interactable elements in the future, maybe like a game of snake.");

console.log(averageScore);

console.log(stringTemplateExample);

if (averageScore >= 9.5){
    console.log("It looks like these are really good games.");
}
else{
    console.log("These games average score is not above 9.5");
}

console.log(findObjectViaId(3));

console.log(calculateArrayScoreAverage(items));

// Here's my notes:
// Step 1: Remove the hard coded items, leave a single empty item. 
// 2: Add a filter above index.html, specifically a selectbox that populates with the types of genres within the array of objects in data.js
// 3: Select the item-list-container and filter control with dom apis
// 4: Create renderItems(itemsToRender), which clears the current rendered items and then re-displays them
// 5 call renderitems when page first loads.
// 6 Add a change event listener to the selectbox filter control that calls returnGameOfType
// 7 Add a favorite or bookmark control to each rendered item. Add an event listener so it changes the item's favorite state in the interface.
// 8 Store the list of favorite item ids in localstorage and restore the favorite indicators
// 9 add one meaningful preference to localStorage for persistent preferences. (I should do last selected genre will be automatically loaded upon page load.)


// 1: Done. 2 isn't done. 3 is done. 4 is done.
const dropdownGenre = document.getElementById('genre');

const itemContainer = document.querySelector('.item-main-list');

// This is necessary for part of the filter. These take the items array and pull the genres
// and then create an array of only those genres.

//then it populates the dropdown list with them.

const genres = items.map(item => item.type);
const uniqueArray = [...new Set(genres)];

const allOption = document.createElement('option');
allOption.value = 'all';
allOption.textContent = 'All';
dropdownGenre.appendChild(allOption);

for (const item of uniqueArray){
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    dropdownGenre.appendChild(option);
}






// Step 4:
// I think I need to create a div, then append each part of the original as it as a child... I hope.
// edit nw that I am done: It works. If it works I won't be upset with it.

// the favorite part was hard so I asked for help

function renderItems(itemsToRender){
    itemContainer.innerHTML="";
    itemsToRender.forEach(item =>{
        const newDiv = document.createElement('div');
        newDiv.className ="item-list";

        const newArticle = document.createElement('article');
        newArticle.className = "item-card";

        newDiv.appendChild(newArticle);

        const newHeader = document.createElement('h3');
        newHeader.textContent = item.name;

        const genrePara = document.createElement('p');
        genrePara.textContent = item.type;

        const image = document.createElement('img');
        image.src = item.img;

        const reviewPara = document.createElement('p');
        reviewPara.textContent = item.description;

        const ratingPara = document.createElement('p');
        ratingPara.textContent += "My rating: "
        ratingPara.textContent += item.rating;
        ratingPara.textContent += "/10";

        const steamLink = document.createElement('a');
        steamLink.href = item.link;
        steamLink.textContent += "The steam page for: "
        steamLink.textContent += item.name;


        // VV needed assistance for this. VV

        const favButton = document.createElement('button');
        const isFav = getFavorites().includes(item.id);
        favButton.textContent = isFav ? "★ Favorited!" : "☆ Favorite?";
        favButton.classList.toggle("favorited", isFav);

        favButton.addEventListener("click", () => {
        const favs = getFavorites();
        let updated;
        if (favs.includes(item.id)) {
            updated = favs.filter(id => id !== item.id);   // remove
        } else {
            updated = [...favs, item.id];                  // add
        }
        saveFavorites(updated);

        const nowFav = updated.includes(item.id);
        favButton.textContent = nowFav ? "★ Favorited!" : "☆ Favorite?";
        favButton.classList.toggle("favorited", nowFav);
        });

        newArticle.appendChild(newHeader);
        newArticle.appendChild(genrePara);
        newArticle.appendChild(favButton);
        newArticle.appendChild(image);
        newArticle.appendChild(reviewPara);
        newArticle.appendChild(ratingPara);
        newArticle.appendChild(steamLink);
        itemContainer.appendChild(newDiv);
    })
}


function genreChange(event){
    const selectGenre = event.target.value;
    if (selectGenre != "all"){
    const genreArray = returnGameOfType(selectGenre);
    localStorage.setItem("lastGenre", selectGenre);
    renderItems(genreArray);
    }
    else if (selectGenre == "all"){
        localStorage.setItem("lastGenre", selectGenre);
        renderItems(items);
    }
}

dropdownGenre.addEventListener("change", genreChange);

function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function saveFavorites(favs) {
  localStorage.setItem("favorites", JSON.stringify(favs));
}

// asked an ai why an error was appearing, said to use the 4 below lines instead of what I was doing before.
// Normally I try to fix things myself, but I gave up.

const savedGenre = localStorage.getItem("lastGenre");
const validValues = Array.from(dropdownGenre.options).map(option => option.value);

dropdownGenre.value = validValues.includes(savedGenre) ? savedGenre : validValues[0];

renderItems(returnGameOfType(dropdownGenre.value));