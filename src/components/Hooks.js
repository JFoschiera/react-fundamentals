import { useEffect, useState } from "react";

const Hooks = () => {

  const [newAge, setNewAge] = useState(34);

  // const changeAge = () => {
  //   age -= 1;
  //   {console.log(age)}
  // };

  const changeNewAge = () => {
    let changing = newAge - 1
    setNewAge(changing);
  }

  useEffect(() => {
    console.log("Testing");
  });

  return (
    <div>
      <p><strong>Age:</strong> {newAge}</p>
      <button onClick={changeNewAge}>Change Age</button>
    </div>
  );
};

export default Hooks;
