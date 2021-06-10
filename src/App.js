import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data is: ", data);
  return (
    <div className="App">
      <h1> Names </h1>
      <ul>{data && data.map((obj) => <li key={obj.id}>{obj.name}</li>)}</ul>
    </div>
  );
}
export default App;
