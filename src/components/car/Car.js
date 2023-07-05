import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import ListRow from "./ListRow";
import PubSub from "pubsub-js";

function Car() {
  const [cars, setCars] = useState([
    {
      id: 1,
      productionYear: "2018",
      brand: "mercedes"
    },
    {
      id: 2,
      productionYear: "2019",
      brand: "ferrari"
    },
    {
      id: 3,
      productionYear: "2020",
      brand: "BMW"
    }
  ]);
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    PubSub.subscribe("carlist", (_, data) => {
      setCarList(data);
    });
  }, []);

  return (
    <Col md={5}>
      <Card className="text-center">
        <Card.Header>Cars</Card.Header>
        <Card.Body>
          {cars
            .filter((car, index) => {
              for (let i = 0; i < carList.length; i++) {
                if (car.brand === carList[i]) {
                  return car;
                }
              }
            })
            .map(car => (
              <Card key={car.id} style={{ width: "18rem", marginBottom: "10px" }}>
                <ListGroup variant="flush">
                  <ListRow car={car} />
                </ListGroup>
              </Card>
            ))}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Car;
