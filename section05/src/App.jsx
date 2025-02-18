import "./App.css";
// import Register from "./components/Register";
import HookExam from "./components/Hookexam";
function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

// function App() {
//   const [count, setCount] = useState(0);
//   const [light, setLight] = useState("OFF");

//   return (
//     <>
//       <div>
//         {/* <h1>{light}</h1> */}
//         <Bulb light={light} />
//         <button
//           onClick={() => {
//             setLight(light === "ON" ? "OFF" : "ON");
//           }}
//         >
//           전구 {light === "ON" ? "끄기" : "켜기"}
//         </button>
//       </div>
//       <div>
//         <h1>{count}</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           +
//         </button>
//         <button
//           onClick={() => {
//             setCount(count - 1);
//           }}
//         >
//           -
//         </button>
//       </div>
//     </>
//   );
// }

export default App;
