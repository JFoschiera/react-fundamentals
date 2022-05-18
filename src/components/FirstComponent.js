import AnotherComponent from "./AnotherComponent";


function FirstComponent() {
  // Commenting
  const name = "Juliana"

  return (
    <div className="">
      {/* Commenting on JSX */}
      <p>First Component</p>
      <p><strong>name</strong>: {name}</p>
      {1 + 1}
      {console.log( "I can place any js code between { } ")}
      <AnotherComponent />
    </div>
  );
}

export default FirstComponent;
