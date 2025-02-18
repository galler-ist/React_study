// import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      {/* <Button text={"메일"} color={"red"} a={1} b={2} c={3} /> */}
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>
    </>
  );
}

export default App;
