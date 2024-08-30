import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectSideBar from './ProjectSidebar';
import ProjectCard from './ProjectCard';

function FeaturedProject() {
  return (
    <Container fluid-sm>
      <Row>
        <Col> <ProjectSideBar /> </Col>
        <Col> <ProjectCard /> </Col>
          
      </Row>
    </Container>
  );
}

export default FeaturedProject;