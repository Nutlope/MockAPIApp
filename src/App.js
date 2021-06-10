import axios from "axios";
import { useState, useEffect } from "react";
import Profile from "./Profile";

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

  return (
    <div className="App">
      {data &&
        data.map((obj) => (
          <Profile
            key={obj.id}
            name={obj.name}
            email={obj.email}
            website={obj.website}
            phone={obj.phone}
          />
        ))}
    </div>
  );
}
export default App;
