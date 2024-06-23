interface Props {
  items: object;
  PersonName: string;
  PersonExpense: number;
}
import Table from "./Table";
function Card({ items, PersonName, PersonExpense }: Props) {
  return (
    <>
      <div className="card" style={{ width: "18rem", background: "#808080" }}>
        <div className="card-body">
          <h5 className="card-title">{PersonName}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Expense:{PersonExpense}
          </h6>
          <p className="card-text">Money He Owes to others</p>
          <div>
            <Table items={items} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
