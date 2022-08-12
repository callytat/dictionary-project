import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sushi" />
        </main>
        <div className="Footer">
          Project coded by Cally Tat / Open-source code{" "}
          <a
            href="https://github.com/callytat/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            here on Github
          </a>{" "}
          / Hosted{" "}
          <a
            href="https://dynamic-gumption-23b16c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            here on Netifly
          </a>
        </div>
      </div>
    </div>
  );
}
