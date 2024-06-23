interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
import { useState } from "react";

//import { Fragment } from "react";
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectd, setselectd] = useState(-1);
  useState;
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectd === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectd(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
{/* <ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */}