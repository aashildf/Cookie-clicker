
import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users"
import "./App.css";


function App() {
  return (
    <>
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/cat.one.mp4" type="video/mp4" />
      </video>

      <div className="main-container">
        <CookieClicker />
        <CatFacts />
        <Users />
      </div>
    </>
  );
}

export default App;
