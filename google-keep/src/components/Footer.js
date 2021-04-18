import React from "react";

function Footer() {
  return (
    <div>
      <p
        style={{
          position: "relative",
          bottom: "0",
          width: "100%",
          textAlign: "center",
          left: 0,
          right: 0,
        }}
      >
        Copyright &copy; {new Date().getFullYear()} Hamzah Muhajirin
      </p>
    </div>
  );
}

export default Footer;
