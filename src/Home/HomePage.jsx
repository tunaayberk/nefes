import React from "react";
import Async from "react-code-splitting";

const Slider = () => <Async load={import("./components/Slider")} />;
const Calismalarimiz = () => (
  <Async load={import("./components/Calismalarimiz")} />
);
const Konseptimiz = () => <Async load={import("./components/Konseptimiz")} />;
const Etkinlikler = () => <Async load={import("./components/Etkinlikler")} />;
const Blog = () => <Async load={import("./components/Blog")} />;

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Calismalarimiz />
      <Konseptimiz />
      <Etkinlikler />
      <Blog />
    </React.Fragment>
  );
};

export default HomePage;
