import Bar from "./components/Bar";
import ExpenseSheet from "./components/ExpenseSheet";
function App() {
  return (
    <>
      <div>
        <Bar />
      </div>
      <div>
        <ExpenseSheet />
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
