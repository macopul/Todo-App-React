export default function Layout () {

  const numberArray = [1,3,556,6]
  
  return (
    <div className="container">
      <p className="paragraph"> Hello from scss with vite </p>
      <div className="box"> {numberArray} </div>
    </div>
  )
}