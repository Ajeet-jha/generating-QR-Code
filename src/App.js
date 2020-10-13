import React from "react";
import Canvas from "./components/Canvas";
import Image from "./components/Image";
function App() {
  const style_obj = {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-around",
    margin: "10vh 12px",
  };
  return (
    <>
      <h4 style= {{"margin": "59px  auto", "textAlign": "center"}}>QR code Generator</h4>
      <div className="App" style={style_obj}>
        <div>
          <Canvas />
        </div>
        <div>
          <Image />
        </div>
      </div>
    </>
  );
}

export default App;
