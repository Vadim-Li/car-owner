import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import ListRow from "./ListRow";
import PubSub from "pubsub-js";
import { NavLink } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Tom",
      lastName: "Black",
      birthday: "2000",
      carList: ["BMW"]
    },
    {
      id: 2,
      firstName: "Jack",
      lastName: "White",
      birthday: "2001",
      carList: ["mercedes", "ferrari"]
    },
    {
      id: 3,
      firstName: "Anton",
      lastName: "White",
      birthday: "1999",
      carList: ["mercedes", "ferrari", "BMW"]
    }
  ]);

  function showCar(carlist) {
    PubSub.publish("carlist", carlist);
  }


  return (
    <Col md={5}>
      <Card className="text-center">
        <Card.Header>Owners</Card.Header>
        <Card.Body>
          {users.map(user => (
            <Card
              // as={NavLink}
              // to="car"
              key={user.id}
              style={{ width: "18rem", marginBottom: "10px" }}
              onClick={() => showCar(user.carList)}
            >
              <ListGroup variant="flush">
                <ListRow user={user} />
              </ListGroup>
            </Card>
          ))}
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </Col>
  );
}

export default User;
