import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function FormDiv() {

  const [validated, setValidated] = useState(false);

  //user data
  const [telegramUsername, setTelegramUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthYear, setBirthYear] = useState(0);
  const [gender, setGender ] = useState("");
  const [motive, setMotive ] = useState("");


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(telegramUsername);
    console.log(nickname);
    console.log(birthYear);
    console.log(gender);
    console.log(motive);
    
    
    
    
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTelegramUsername">
        <Form.Label>Telegram Username</Form.Label>
        <Form.Control type="text" placeholder="@example" className="mb-3 mt-3" required onChange={(e)=>setTelegramUsername(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlNickname">
        <Form.Label>Nickname</Form.Label>
        <Form.Control type="text" placeholder="Nickname you want to be called" className="mb-3 mt-3" required onChange={(e)=>setNickname(e.target.value)} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlGender">
      <Form.Label>Gender</Form.Label> 
      <Form.Select aria-label="Default select example" required onChange={(e)=>setGender(e.target.value)}>
      <option>Gender</option>
      <option value="male">Male</option>
      <option value="female">female</option>
    </Form.Select>
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlMotive">
        <Form.Label>Why you joined this class?</Form.Label>
        <Form.Control as="textarea" rows={3} required onChange={(e)=>setMotive(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlBirthYear">
        <Form.Label>BirthYear</Form.Label>
        <Form.Control type="number" placeholder="eg.2001" required onChange={(e)=>setBirthYear(e.target.value)} />
      </Form.Group>

      <Button className='mt-3 mb-3' type="submit">Submit</Button>
        
    </Form>
  );
}

export default FormDiv;