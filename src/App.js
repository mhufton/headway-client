import React from "react";

import NavBar from "./Components/NavBar";
import LinkCreator from "./Components/LinkCreator";
import LinkList from "./Components/LinkList";
import Hero from "./Components/Hero";
import Integrations from "./Components/Integrations";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col max-width-screen-2xl">
      <div>
        <NavBar />
      </div>
      <div className="mb-5">
        <Hero />
      </div>
      <div className="align-center">
        <LinkCreator />
      </div>
      <div>
        <LinkList />
      </div>
      <div>
        <Integrations />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

