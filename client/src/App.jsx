import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles/app";

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then(function (response) {
        console.log(response.data);
        setColors(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      <Container>
        <ul>
          {colors.map((color) => (
            <li key={color.id}>
              <button style={{ backGroundColor: `${color.value}` }}>
                {color.color}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </React.Fragment>
  );
};

export default App;
