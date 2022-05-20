// (props) was changed to ({ x }) so no need of calling x as props.x
// Like this you can call many properties, like x, y and more
const RenderCond = ({ x, y }) => {
// now it accepts properties - on App.js
  // const x = 2;
  return (
    <div>
      {x > 5 && <p> x bigger than 5 </p>}
      {/* condition && what happens */}

      {x > 5 ? <p> x bigger than 5 </p> : <p> x smaller than 5 </p>}
      {/* this is an if else condition in thernary */}

      <p>O valor de Y é: {y}</p>
    </div>
  )
}

export default RenderCond;
