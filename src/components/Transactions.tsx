import React, { useState, useEffect } from 'react';
import "./Trans.css";
interface Item {
  Expense: string;
  Date: string;
  Members: string[];
  Event: string;
  Paidby: string;
  person1?: string;
  person1amt?: number;
  person2?: string;
  person2amt?: number;
}

const Transactions: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/transactioncall",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `HTTP error! Status: ${response.status}, Details: ${errorText}`
          );
        }

        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        setError("Can't connect to Database, please reload :)");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
   <div className="trans">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Expense</th>
          <th scope="col">Date</th>
          <th scope="col">Members</th>
          <th scope="col">Event</th>
          <th scope="col">Paid by</th>
          <th scope="col">Paid by (M1)</th>
          <th scope="col">Amt 1</th>
          <th scope="col">Paid by (M2)</th>
          <th scope="col">Amt 2</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.Expense}</td>
            <td>{item.Date}</td>
            <td>{item.Members.join(', ')}</td>
            <td>{item.Event}</td>
            <td>{item.Paidby}</td>
            {item.person1 && item.person1amt !== undefined ? (
              <>
                <td>{item.person1}</td>
                <td>{item.person1amt}</td>
              </>
            ) : (
              <>
                <td></td>
                <td></td>
              </>
            )}
            {item.person2 && item.person2amt !== undefined ? (
              <>
                <td>{item.person2}</td>
                <td>{item.person2amt}</td>
              </>
            ) : (
              <>
                <td></td>
                <td></td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};

export default Transactions;
