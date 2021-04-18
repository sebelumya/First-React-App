import React from "react";
import Paper from "@material-ui/core/Paper";

function Header() {
  return (
    <Paper style={{ padding: "5px", display: "flex" }} square elevation={3}>
      <img
        style={{ width: "50px" }}
        src="https://png2.cleanpng.com/sh/f9e5223ae65ccb023df387429ee41b4f/L0KzQYm3VsA1N5p0iZH0aYP2gLBuTgJmaZR5RdxqdnH2c8PwkQQuaZ9sjd5qcnr2Pbr2jvlkNZJ5h982NXK0RYXphcY6PGg5Tak3M0S6QYq7UcgyPWM9SaQ7M0S1RoGBUb5xdpg=/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png"
        alt="Logo"
      ></img>
      <h1
        style={{ color: "rgba(0,0,0,0.9)", fontWeight: "100" }}
        className="site-name"
      >
        Note Keeper
      </h1>
    </Paper>
  );
}

export default Header;
