import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fotosalvador from '../assets/images/salvador.jpg'

function ProjectCard() {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={fotosalvador} />
      <Card.Body>

        <Card.Title>Hospital del Salvador</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ver Informacion</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;