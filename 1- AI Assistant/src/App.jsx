import "bulma/css/bulma.css";
// import "./App.css";

import ProfileCard from "./ProfileCard";
import AlexaImg from "/alexa.png";
import CortanaImg from "/cortana.png";
import SiriImg from "/siri.png";

function App() {
  return (
    <div>
      <div>
        <h1 className="">Personal Digital Assistants</h1>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-3">
                <ProfileCard title="Alexa" handle="@alexa" img={AlexaImg} />
              </div>
              <div className="column is-3">
                <ProfileCard title="Bixby" handle="@bixby" img={CortanaImg} />
              </div>
              <div className="column is-3">
                <ProfileCard title="Siri" handle="@siri" img={SiriImg} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
