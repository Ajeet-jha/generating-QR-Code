import React from "react";
import { useQRCode } from "react-hook-qrcode";

const Image = () => {
  const [inputRef] = useQRCode({
    text: "https://github.com/bunlong/react-hook-qrcode",
    options: {
      type: "image/jpeg",
      quality: 0.3,
      level: "H",
      margin: 3,
      scale: 4,
      width: 200,
      color: {
        dark: "#010599FF",
        light: "#FFBF60FF",
      },
    },
  });

  return (
    <>
    <img ref={inputRef} alt="qr"/>;
    <p>QR Code  Using Image !!! </p>
    </>
  )
};

export default Image;
