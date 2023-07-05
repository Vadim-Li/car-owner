import User from "./components/user/User";
import Car from "./components/car/Car";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";

function App() {
  return (
    <Container>
      <Row>
        <User />
        <Routes>
          <Route path="/car" element={<Car />}></Route>
          <Route path="/" element={<Navigate to="" />}></Route>
        </Routes>
        
      </Row>
    </Container>
  );
}

export default App;
