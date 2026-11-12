import { useEffect } from 'react';


export default function About() {
  useEffect(() => {
    document.title = 'Andrew Powers Favorite Games About';
  }, []);

  return (
    <>

      <main>
        <h1>About this site:</h1>
        <p>
          This is my CITC 2375 semester project. I am currently planning to showcase my favorite games here.
        </p>
        <p>
          This project will allow people to see my taste in games, see an example of my newly gained experience in html, and see recommendations for games.
        </p>
        <br />
        <table>
          <caption>This is a table featuring planned &quot;data&quot; for this website.</caption>
          <colgroup>
            <col className="name-column" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Potential future games</th>
              <th scope="col">Genre</th>
              <th scope="col">Short Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Final Fantasy X</th>
              <td>Turn-based RPG</td>
              <td>A classic turn based rpg from 2001 with one of the best stories possible.</td>
            </tr>
            <tr>
              <th scope="row">DELTARUNE</th>
              <td>RPG</td>
              <td>Really interesting story and bullet hell combat.</td>
            </tr>
            <tr>
              <th scope="row">KINGDOM HEARTS -HD 1.5 + 2.5 ReMIX</th>
              <td>ARPG</td>
              <td>It&apos;s 4 action rpgs in one 30 dollar package. They&apos;re fun.</td>
            </tr>
            <tr>
              <th scope="row">Rogue Legacy 2</th>
              <td>Roguelite</td>
              <td>It&apos;s a short and sweet 2d action roguelite.</td>
            </tr>
          </tbody>
        </table>
      </main>

      <footer className="content-width">
        <p>
          The images featured are owned by the companies attributed through the steam links, none are owned by me.
        </p>
      </footer>
    </>
  );
}
