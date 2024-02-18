{
  /* <div id="parent">
    <div id="child">
        <h1>Hello I'm heading 1</h1>
    </div>
    <div id="child2">
        <h1>Hello I'm heading 1</h1>
    </div>
</div> */
}

// Create h1 tag with content using React
// const heading = React.createElement(
//   "h1",
//   { id: "heading", abc: "xyz" },
//   "Hello World from React!"
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Im heading 1")
  ), React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "Im heading 2")
  )]
);

console.log("parent", parent); //object

// Create root from ReactDOM for browser
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the root
root.render(parent);
