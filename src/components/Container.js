const Container = ({ children }) => {
  // children is the name of this argument. This child is on app.js
  return (
    <div className="container">{ children }</div>
  )
}

export default Container
