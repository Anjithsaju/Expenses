
import { useState} from 'react';
import Transactions from './components/Transactions';
import TotalExp from './components/TotalExp';
import ExpenseSheet from './components/ExpenseSheet';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const transhidden = () => {
    setIsVisible(!isVisible); // Toggle visibility state
    console.log('Button clicked');
  };

  return (
    <>
      <div>
        <div>
          <TotalExp />
        </div>
        <div>
          <ExpenseSheet />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', margin: '10px', justifyContent: "center" }}>
          <a className="btn btn-primary" href="https://splitapp-ert35jfyq-anjithsajus-projects.vercel.app/" role="button" style={{ background: "green", border: "none", margin: '20px' }}>Home</a>
          <a className="btn btn-primary" href="https://anjithsaju.github.io/Reset/" role="button" style={{ border: "none", margin: '20px' }}>Reset</a>
          <button className="btn btn-secondary" onClick={transhidden} style={{margin:'15px'}}>Transactions</button>
        </div>
      </div>
      <div className="App" style={{ display: isVisible ? 'none' : 'block' }}>
        <Transactions />
      </div>
    </>
  );
}

export default App;


/* <a href="https://anjithsaju.github.io/" target="_blank">Home page</a>
<a href="reset.html">Click me to reset</a> */
// <div>
//   <ListGroup
//     items={items}
//     heading="cities"
//     onSelectItem={handleSelectitem}
//   />
// </div>
// const items = ["new  yourk", "anjith", "london", "paris"];
//const handleSelectitem = (item: string) => {
//   console.log(item);
// };
//import ListGroup from "./components/ListGroup";



  // return (
  //   <>
  //     <div>
  //       <div>
  //         <TotalExp />
  //       </div>
  //       <div>
  //         <ExpenseSheet />
  //       </div>
  //       <div style={{ display:'flex',alignItems: 'center', margin: '10px',justifyContent: "center" }}>
  //       <a className="btn btn-primary" href="https://splitapp-ert35jfyq-anjithsajus-projects.vercel.app/" role="button" style={{ background:"green",border:"none", margin: '20px' }}>Home</a>
  //       <a className="btn btn-primary" href="https://anjithsaju.github.io/Reset/" role="button" style={{border:"none", margin: '20px' }}>Reset</a>
  //       </div>
  //     </div>
  //   </>
  // );
