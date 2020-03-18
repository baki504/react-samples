import React from "react";

export default function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
