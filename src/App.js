import { useEffect } from "react";
import "./App.css";
import airBnb from "./assests/images/air-bnb.png";
import meme from "./assests/images/meme.png";
import noteCard from "./assests/images/note-card.png";
import tenzie from "./assests/images/tenzie.png";

const App = () => {
  useEffect(() => {
    alert(`*** Please view in viewports from: 350px - 768px ***
    *** I'm still working on this project 
    and I'm implementing "mobile first" workflow  ***
    *** Thank you for putting up with this annoying pop up! ***
    `);
  }, []);
  return (
    <div id="home" class="wrapper">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <div class="h1">
            <h1>Eric McKee</h1>
            <small>
              ~ <i>Let's Build the Web Together</i> ~
            </small>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            repellat veniam culpa! Perferendis accusamus rem, nesciunt, a modi
            ratione necessitatibus maxime omnis dolorem veritatis dolore impedit
            minus adipisci explicabo iste reiciendis laborum quisquam.
            Cupiditate ducimus nam, asperiores commodi necessitatibus distinctio
            error autem esse officia iusto recusandae exercitationem repellat
            voluptate rem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            impedit repellendus inventore odio, iste tenetur eius obcaecati
            sapiente doloremque voluptas perspiciatis nisi animi veniam! Rem
            minus quae omnis officia sed?
          </p>
        </section>

        <section id="work">
          <h2>My Work</h2>
          <div class="gallery">
            <div class="card">
              <h4>Project Title</h4>
              <img src={airBnb} alt="" />
              <p>
                <u>Project Description:</u> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Asperiores placeat laboriosam
                voluptas hic autem nam voluptates molestias beatae similique.
                Quia?
              </p>
            </div>
            <div class="card">
              <h4>Project Title</h4>
              <img src={tenzie} alt="" />
              <p>
                Project Description: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Asperiores placeat laboriosam voluptas hic
                autem nam voluptates molestias beatae similique. Quia?
              </p>
            </div>
            <div class="card">
              <h4>Project Title</h4>
              <img src={noteCard} alt="" />
              <p>
                Project Description: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Asperiores placeat laboriosam voluptas hic
                autem nam voluptates molestias beatae similique. Quia?
              </p>
            </div>
            <div class="card">
              <h4>Project Title</h4>
              <img src={meme} alt="" />
              <p>
                Project Description: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Asperiores placeat laboriosam voluptas hic
                autem nam voluptates molestias beatae similique. Quia?
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <form>
            <input type="text" placeholder="Name" />
            <textarea
              cols="30"
              rows="5"
              placeholder="Drop me a line ..."
            ></textarea>
            <button>Send It!</button>
          </form>
        </section>
      </main>

      <footer>
        <small>
          &copy; Eric McKee |{" "}
          <span class="date">{new Date().getFullYear()}</span>
        </small>
      </footer>
    </div>
  );
};

export default App;
