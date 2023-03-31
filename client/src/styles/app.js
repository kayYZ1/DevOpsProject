import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const List = styled.ul`
  display: flex;
  text-align: center;
  flex-direction: column;
  text-decoration: none;
`;

const ListItem = styled.ul`
  padding: 15px;
`;

const Button = styled.button`
  height: 100%;
  width: 150px;
  height: 100px;
  border: none;
  font-size: 30px;
  text-transform: uppercase;
  color: white;
`;

export { Container, List, ListItem, Button };
