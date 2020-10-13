import React from "react";
import { useQRCode } from "react-hook-qrcode";

const Canvas = () => {
  const [inputRef] = useQRCode({
    text: "https://github.com/bunlong/react-hook-qrcode",
    options: {
      level: "Q",
      margin: 7,
      scale: 1,
      width: 200,
      color: {
        dark: "#010599FF",
        light: "#FFBF60FF",
      },
    },
  });

  return (
  <>
    <canvas ref={inputRef} />
    <p>QR Code  Using Canvas !!! </p>
  </>
  );
};

export default Canvas;
