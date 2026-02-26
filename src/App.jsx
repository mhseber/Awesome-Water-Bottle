import { Suspense } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";

const bottlesPromise = fetch("./bottles.JSON").then((res) => res.json());

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<div> Bottles are Loading...</div>}>
        <Bottles bottlesPromise={bottlesPromise} />
      </Suspense>
    </>
  );
}

export default App;
