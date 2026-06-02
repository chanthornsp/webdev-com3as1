import { useState } from "react";

function App(){

  const appName = "ReactJs App";
  const [count,setCount] = useState(0);

  return (
    <div className="text-center space-y-2">
      <h1 className="text-4xl font-bold text-center text-purple-700">Hello to {appName}</h1>
        <button 
        onClick={()=>setCount(count + 1)}
        className="bg-purple-700 text-white px-4 py-2 rounded active:bg-purple-800">Click Me</button>
      <h2>{count}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, libero necessitatibus eos eius nemo ex saepe recusandae sunt natus unde totam qui esse architecto quaerat aut consequuntur hic reiciendis itaque?
      </p>
    </div>
  );
}

export default App;