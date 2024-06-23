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
      </div>
    </>
  );
}
export default App;
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
