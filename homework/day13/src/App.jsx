import { useState, useEffect } from "react";
import Krw from "./components/Krw";
import Usd from "./components/Usd";
import "./App.css";

function App() {
  const [krw, SetKrw] = useState(0);
  const [usd, SetUsd] = useState(0);

  const onChange = (currency, value) => {
    if (currency === "krw") {
      SetKrw(value);
      SetUsd(value / 1300);
    } else {
      SetUsd(value);
      SetKrw(value * 1300);
    }
  };

  useEffect(() => {
    console.log("krw : ", krw);
    console.log("usd : ", usd);
  }, [krw, usd]);

  return (
    <div>
      <h1>환율 변환기 (KRW-USD)</h1>
      <Krw value={krw} onChange={onChange} />
      <Usd value={usd} onChange={onChange} />
    </div>
  );
}

export default App;
