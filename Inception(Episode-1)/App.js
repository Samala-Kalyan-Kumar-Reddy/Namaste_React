
/**
 *<div id="Parent">
      <div id="child">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
      </div>

      <div id="child">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
      </div>

 </div> 
 * 
 * ReactElement(object)-->HTML(Browser understands)
 */


// const heading=React.createElement("h1",{id:"head"},"Hello World from React!!")

// console.log(heading)//object
// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// const parent=React.createElement("div",{id:"Parent"},React.createElement("child",{id:"child"},
// [React.createElement("h1",{},"I'm a h1 Tag"),
// React.createElement("h2",{},"I'm a h2 Tag")]))

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



const parent = React.createElement("div", { id: "Parent" }, [
        React.createElement("child", { id: "child1" }, [
          React.createElement("h1", {}, "I'm a h1 Tag"),
          React.createElement("h2", {}, "I'm a h2 Tag"),
        ]),
        React.createElement("child", { id: "child2" }, [
          React.createElement("h1", {}, "I'm a h1 Tag"),
          React.createElement("h2", {}, "I'm a h2 Tag"),
        ]),
      ]);
      const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);   