import React, { useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="box">
      <div style={{ padding: "50px" }}>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>{d.phone}</td>
                <td>{d.address}</td>
                <td>{d.city}</td>
                <td>{d.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
