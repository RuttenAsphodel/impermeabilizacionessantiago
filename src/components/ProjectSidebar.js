import ListGroup from 'react-bootstrap/ListGroup';

function ProjectSideBar() {
  return (
    <ListGroup variant='flush'>
      <ListGroup.Item variant='info'>Hospital Salvador</ListGroup.Item>
      <ListGroup.Item variant='dark'>Proyecto Alma</ListGroup.Item>
      <ListGroup.Item variant='danger'>Hospital Queilen</ListGroup.Item>
      <ListGroup.Item variant='success'>Transoceanica</ListGroup.Item>
      <ListGroup.Item variant='warningw'>Playa Mar</ListGroup.Item>
    </ListGroup>
  );
}

export default ProjectSideBar;