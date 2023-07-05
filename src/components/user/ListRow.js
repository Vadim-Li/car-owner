import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";

function ListRow({user}) {
  
  function computedClassName({ isActive }) {
    return isActive
      ? "list-group-item navActive  py-3"
      : "list-group-item  py-3 ";
  }
  return (
    <div>
      <NavLink to="car" className={computedClassName}>{user.firstName}</NavLink>
      <NavLink to="car" className={computedClassName}>{user.lastName}</NavLink>
      <NavLink to="car" className={computedClassName}>{user.birthday}</NavLink>
      
    </div>
  );
}

export default ListRow;
