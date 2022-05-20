import { useEffect, useState } from "react";

const List = () => {
  const items = [{
    id: 1,
    name: "Juliana"
  }, {
    id: 2,
    name: "Memo"
  }, {
      id: 3,
      name: "We"
  }]

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;
