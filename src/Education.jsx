import Table from 'react-bootstrap/Table';


function Education() {
  return (
    <Table striped bordered hover variant="dark">
    
    <tbody>
      <tr>
        <td>1</td>
        <td>Bachelor of Technology </td>
        <td>ECE</td>
        <td>2019</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Intermediate</td>
        <td>MPC</td>
        <td>2015</td>
      </tr>
      <tr>
        <td>3</td>
        <td>10th</td>
        <td colSpan={2}>2013</td>
      </tr>
    </tbody>
  </Table>
  );
}

export default Education;