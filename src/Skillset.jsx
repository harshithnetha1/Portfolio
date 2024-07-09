import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';


function Skillset() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  
  <CardGroup striped bordered hover variant="dark">
  <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <ListGroup variant="flush">
      <ListGroup.Item>1.HTML</ListGroup.Item>
      <ListGroup.Item>2.CSS</ListGroup.Item>
      <ListGroup.Item>3.BootStrap</ListGroup.Item>
      <ListGroup.Item>4.Tailwind CSS</ListGroup.Item>
      <ListGroup.Item>5.React JS</ListGroup.Item>
      <ListGroup.Item>6.Node JS</ListGroup.Item>
      <ListGroup.Item>7.Mongo DB</ListGroup.Item>
      

    </ListGroup>
  </Card>
  <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <ListGroup variant="flush">
    <ListGroup.Item>8.Express</ListGroup.Item>
      <ListGroup.Item>9.Python</ListGroup.Item>
      <ListGroup.Item>10.SQL</ListGroup.Item>
      <ListGroup.Item>11.Basics of Machine Learning</ListGroup.Item>
      <ListGroup.Item>12.Basics of PHP</ListGroup.Item>
      <ListGroup.Item>13.Basics of R Language</ListGroup.Item>
      <ListGroup.Item>14.C language</ListGroup.Item>
    </ListGroup>
  </Card>
     
    </CardGroup>
</div>

  );
}

export default Skillset;