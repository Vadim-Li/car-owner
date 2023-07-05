import ListGroup from "react-bootstrap/ListGroup";

function ListRow({car}) {
  return (
    <div>
      <ListGroup.Item>{car.id}</ListGroup.Item>
      <ListGroup.Item>{car.productionYear}</ListGroup.Item>
      <ListGroup.Item>{car.brand}</ListGroup.Item>
      
    </div>
  );
}

export default ListRow;
