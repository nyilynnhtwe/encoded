import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import FormDiv from './FormDiv';


function App() {
  const [count, setCount] = useState(0);

  let date = new Date();
  let resultStr = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  return (
    <div id='mainDiv'>
      <Container fluid id='mainContainer'>

        <div className='header'>
          <p>Welcome To Sir Lynn 's JavaScript Course</p>
          <h6>{resultStr}</h6>
        </div>

        <div className='divs'>
          <h2 className='header'>Student Registration</h2>
          <FormDiv />
        </div>


        <div className='footer'>
          <div id="footerText">
          <p>Copyright &copy; {date.getFullYear()} | Lynn</p>
          </div>
        </div>
      </Container>

      
    </div>
  )
}

export default App;
