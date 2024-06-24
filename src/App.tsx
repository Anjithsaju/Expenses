import ExpenseSheet from "./components/ExpenseSheet";
import TotalExp from "./components/TotalExp";
function App() {
  return (
    <>
      <div>
        <div>
          <TotalExp />
        </div>
        <div>
          <ExpenseSheet />
        </div>
        <div style={{ display:'flex',alignItems: 'center', margin: '10px',justifyContent: "center" }}>
        <a className="btn btn-primary" href="https://anjithsaju.github.io/" role="button" style={{ background:"green",border:"none", margin: '20px' }}>Home</a>
        <a className="btn btn-primary" href="src/index.html" role="button" style={{border:"none", margin: '20px' }}>Reset</a>
        </div>
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
