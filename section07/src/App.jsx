import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [cnt, setCnt] = useState(0);

  const isMount = useRef(false);

  // 1. 마운트
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트

  // useEffect(() => {
  //   console.log(`cnt: ${cnt}`);
  // }, [cnt]);

  const onClickButton = (value) => {
    setCnt(cnt + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer cnt={cnt} />
        {cnt % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
