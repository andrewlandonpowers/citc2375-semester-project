import { useEffect, useState } from 'react';

export default function AddItem({ setItems }) {
  useEffect(() => {
    document.title = 'Andrew Powers Favorite Games Suggestion';
  }, []);


const [gameName, setGameName] = useState('');
const [email, setEmail] = useState('');
const [link, setLink] = useState('');
const [rating, setRating] = useState('');
const [thoughts, setThoughts] = useState('');

// no idea if this will work at this pace.
// Asked ai to create something to retrieve the header for me... and it somehow worked?
function getSteamHeader(link) {
    const match = link.match(/store\.steampowered\.com\/app\/(\d+)/);
    return match
        ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${match[1]}/header.jpg`
        : "/images/Unknown.jpg";
}

function handleSubmit(event) {
    event.preventDefault();

    setItems(currentItems => {
        const lastItem = currentItems[currentItems.length - 1];
        const newId = lastItem ? lastItem.id + 1 : 1;

        const newItem = {
            id: newId,
            name: gameName,
            rating: parseFloat(rating),
            type: "User-Submitted Game",
            link: link,
            description: thoughts,
            img: getSteamHeader(link)
        };

        return [...currentItems, newItem];
    });
    
    setGameName('');
    setRating('');
    setLink('');
    setThoughts('');
    setEmail('');

}

  return (
    <>

      <main>
        <h1>About this page:</h1>
        <p>
          Hello. Here, you can submit games for me to add. Theoretically the game will automatically be added.
        </p>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Submit a new game for me to try!</legend>
            <label htmlFor="game-name">
              Please enter the name of the game to suggest:
              <input type="text" name="game-name" id="game-name" required 
              value={gameName}
              onChange={(event) => setGameName(event.target.value)}
              />
            </label>
            <label htmlFor="email">
              Please enter your email:
              <input type="email" name="email" id="email" required 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label htmlFor="steam-link">
              Please paste a steam store link to your game:
              <input
                type="text"
                name="steam-link"
                id="steam-link"
                placeholder="https://store.steampowered.com/app/(appIdNumbers)/(gameTitle)/"
                size={55}
                pattern="https://store\.steampowered\.com/app/[0-9]+/[A-Za-z0-9_]+/?"
                title="Must be a Steam store link like https://store.steampowered.com/app/12345/Game_Title/"
                required
                value={link}
                onChange={(event) => setLink(event.target.value)}
              />
            </label>
            <label htmlFor="rating">
              Please enter your rating of the game out of 10:
              <input type="text" name="rating" id="rating" required
              pattern="(10(\.0)?|\d(\.\d)?)"
              title="Enter a number between 0 and 10 with at most one decimal place, like 8 or 9.5"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              />
            </label>
            <label htmlFor="thoughts">
              Please enter any comments you have about the game:
              <br />
              <textarea
                id="thoughts"
                name="thoughts"
                rows={5}
                cols={50}
                placeholder="Write your thoughts on the game here!"
                value={thoughts}
                onChange={(event) => setThoughts(event.target.value)}
              />
            </label>
          </fieldset>

          <input type="submit" value="Submit" />
        </form>
      </main>

      <footer className="content-width">
        <p>
          The images featured are owned by the companies attributed through the steam links, none are owned by me.
        </p>
      </footer>
    </>
  );
}
