import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./expsheet.css";
function ExpenseSheet() {
  const [database, setDatabase] = useState<any>(null);
  const [individualDetails, setIndividualDetails] = useState<any>(null);

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
        setDatabase(dataprev["Tally"]);
        setIndividualDetails(dataprev["IDetails"]);

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

  return (
    <div className="expsheet">
      <Card
        items={database["Anjith"]}
        PersonName="Anjith"
        PersonExpense={individualDetails["Anjith"]}
      />
      <Card
        items={database["Chriswin"]}
        PersonName="Chriswin"
        PersonExpense={individualDetails["Chriswin"]}
      />
      <Card
        items={database["Kevin"]}
        PersonName="Kevin"
        PersonExpense={individualDetails["Kevin"]}
      />
      <Card
        items={database["Adith"]}
        PersonName="Adith"
        PersonExpense={individualDetails["Adith"]}
      />
      <Card
        items={database["Richol"]}
        PersonName="Richol"
        PersonExpense={individualDetails["Richol"]}
      />
      <Card
        items={database["Anadhakrishnan"]}
        PersonName="Anadhakrishnan"
        PersonExpense={individualDetails["Anadhakrishnan"]}
      />
    </div>
  );
}

export default ExpenseSheet;
