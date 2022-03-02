import React from "react";

import NavBar from "./Components/NavBar";
import LinkCreator from "./Components/LinkCreator";
import LinkList from "./Components/LinkList";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="flex flex-col max-width-screen-2xl p-5">
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
    </div>
  );
}

export default App;

