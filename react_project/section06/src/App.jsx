import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [cnt, setCnt] = useState(0);

  const onClickButton = (value) => {
    setCnt(cnt + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer cnt={cnt} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
