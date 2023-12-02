
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

import React from 'react';
import ReactDOM from 'react-dom/client';


// const parent = React.createElement("div", { id: "Parent" }, [
//     React.createElement("child", { id: "child1" }, [
//       React.createElement("h1", {}, "I'm a h1 Tag"),
//       React.createElement("h2", {}, "I'm a h2 Tag"),
//     ]),
//     React.createElement("child", { id: "child2" }, [
//       React.createElement("h1", {}, "I'm a h1 Tag"),
//       React.createElement("h2", {}, "I'm a h2 Tag"),
//     ]),
//   ]);


//Jsx(transpiled before it reaches the js engine)->pracel-babel
// Jsx=>React.createElement=>ReactElement=>JS OBJECT=>HTML ELEMENT(RENDER)

//JSX or React Element
// const Jsxparent=
// (<h1 id='head'>
//   Hello React from the JSX</h1>)
//   const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(Jsxparent);   



//React  Functional Components

// const Title=()=>{
//   return <h1 className='head'> Hello from the title component</h1>
// }
// const data=1000;
// //Component composition
// const Headingcomponent=()=>{
//   return <div id='container'>
//     <Title/>
//     <Title></Title>
//     {Title()} 
//     {console.log('Kalyan Reddy')}
//     <h2>{data}</h2>
//     <h1 className='Heading'> Hello from the functional componets</h1>;
//   </div> 
// };
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxtag); 




//Assignment-3

// const JsxTag1 = React.createElement(
//   'div',
//   { id: 'parent' },
//   React.createElement(
//     'h1',
//     { id: 'h1tag', style: { color: 'blue' } },
//     'Hey bro, I\'m a h1 tag',
//     React.createElement('h2', { id: 'h2tag' }, 100000),
//     React.createElement('h3', { id: 'h3tag' }, 'Hello, I\'m a h3 tag')
//   )
// );



//Using the Jsx

// const JsxTag2 = (
//   <div id='parent'>
//     <h1 id='h1tag' style={{ color: 'blue' }}>
//       Hey bro, I'm a h1 tag
//       <h2 id='h2tag'>{100000}</h2>
//       <h3 id='h3tag'>Hello, I'm a h3 tag</h3>
//     </h1>
//   </div>
// );


//Using the functional component

// const JSXTag3 = () => {
//   return (
//     <div>
//       <h1 id='h1tag'>Hello from the H1 tag!!
//         <h2 id='h2tag'>
//           I'm an h2 tag
//           <h3>
//             Hello from the h3 tag
//           </h3>
//         </h2>
//       </h1>
//     </div>
//   );
// };



// const parent = React.createElement("div", { id: "Parent" }, [
//   React.createElement("child", { id: "child1" }, [
//     React.createElement("h1", {}, "I'm a h1 Tag"),
//     React.createElement("h2", {}, "I'm a h2 Tag"),
//   ]),
//   React.createElement("child", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm a h1 Tag"),
//     React.createElement("h2", {}, "I'm a h2 Tag"),
//   ]),
// ]);


// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



// HeaderComponent.jsx

// HeaderComponent.jsx

import React from 'react';
import Navbar from './Navbar';
import "./styles.css";


const HeaderComponent = () => {
  return(
    <Navbar></Navbar>
  )
  
}
  

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
