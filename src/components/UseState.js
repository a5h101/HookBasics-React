// <================================================>
// import React from "react";
// import { useState } from "react";
// import "../App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);

//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <button onClick={handleAge}>Get Older</button>
//     </div>
//   );
// }

// export default UseState;
// <================================================>
// import React from "react";
// import { useState } from "react";
// import "../App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);
//   const [currSib, setSib] = useState(1);

//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   const handleSib = ()=>{
//     setSib(currSib+1);
//   }

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button>
//     </div>
//   );
// }

// export default UseState;
// <================================================>
// import React from "react";
// import { useState } from "react";
// import "../App.css"

// function UseState(){

//   const [state, setState] = useState({age:19, siblings:3});

//   const handleState = (val)=>{

//     setState({
//       ...state,[val]:state[val]+1
//     })
//   }

//   const {age,siblings} = state;

//   return(
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>My siblings {siblings}</h4>
//       <button onClick={()=>{handleState("age")}}>age</button>
//       <button onClick={()=>{handleState("siblings")}}>sib</button>
//     </div>
//   )

// }

// export default UseState;
// <================================================>
// import React from "react";
// import { useState } from "react";
// import "../App.css"

// function UseState(){

//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//   )

// }

// export default UseState;
// <================================================>
// import React, { useState } from 'react';
// import { useEffect } from 'react';

// function UseState() {
//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   useEffect(() => {
//     alert(`something changed ${currAge}`);
//   }, [currAge]);

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={() => setAge((currAge) => currAge + 1)}>age</button>
//       <button onClick={() => setSib((currSib) => currSib + 1)}>sib</button>
//     </div>
//   );
// }

// export default UseState;
// <================================================>
import React, { useContext } from 'react';
import { ToggleTheme } from '../App';
import Like from './Like';
import Text from './Text';

function UseState() {
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? 'black' : 'grey',
    color: theme ? 'grey' : 'black',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <div>
      <div className="content" style={themeStyle}>
        <Like />
        <Text />
        This is made by Kalvium
      </div>
    </div>
  );
}

export default UseState;
