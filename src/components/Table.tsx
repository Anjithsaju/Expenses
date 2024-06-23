interface Props {
  items: object; // Add the pid prop to the Props interface
}

function Table({ items }: Props) {
  return (
    <>
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">Owe Him</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items)
            .filter(([name]) => name !== "pid")
            .map(([name, owe], index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{owe}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
