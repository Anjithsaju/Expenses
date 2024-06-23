import { useState, useEffect } from "react";
import Bar from "./Bar";
import "./expsheet.css";
function TotalExp() {
  //const [database, setDatabase] = useState<any>(null);
  const [Expense, setExpense] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/membersdatapull",
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

        const datathis = await response.json();
        const dataprev = datathis["DataOF"];
        //setDatabase(dataprev["Tally"]);
        setExpense(dataprev["Expenses"]);

        setLoading(false);
      } catch (error: any) {
        setError("Can't connect to Database, please reload :)");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  //const progressValue = ;
  return (
    <>
      <div
        className="card text-bg-dark mb-3"
        style={{ width: "auto", margin: 10 }}
      >
        <div className="card-body">
          <h5 className="card-title">All Expenses</h5>
          <h6>{`Total: ${Expense["Total"]}`}</h6>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
              style={{
                width: `${calculateProgressValue(Expense["Total"], 50000)}%`,
              }}
            ></div>
          </div>

          {Object.entries(Expense)
            .filter(([name]) => name !== "Total")
            .map(([name, owe], index) => (
              <div key={index}>
                <p className="pp">{`${name}: ${owe}`}</p>
                <div>
                  <Bar progressValue={calculateProgressValue(owe, 50000)} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
function calculateProgressValue(expense: any, total: any): number {
  const findv = Math.floor((expense / total) * 100);
  return findv; // Example value
}
export default TotalExp;
