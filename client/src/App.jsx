import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, List, ListItem, Button } from "./styles/app";

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios
      .get("http://172.17.0.1:5000/")
      .then(function (response) {
        setColors(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      <Container>
        <List>
          {colors.map((color) => (
            <ListItem key={color.id}>
              <Button style={{ background: color.value }}>
                {color.color}
                <br></br>
                {color.value}
              </Button>
            </ListItem>
          ))}
        </List>
      </Container>
    </React.Fragment>
  );
};

export default App;
