
function AnotherComponent() {
  // Commenting
  const handleClick = () => {
    console.log("Button Clicked")
  }

  return (
    <div className="">
      <p>Another Component</p>
      <button on="true" onClick={handleClick}>Click Event</button>
    </div>
  );
}

export default AnotherComponent;
