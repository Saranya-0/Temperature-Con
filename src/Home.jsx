import React, { useState } from 'react'

import { Container  } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button  } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col  } from 'react-bootstrap';

function Home() {
    const [temperature, setTemperature] = useState("")
    const [unit, setUnit] = useState("Celsius")
    const [convertedTemperature, setConvertedTemperature] = useState("")

    const handleConvert = () => {
        const temp = parseFloat(temperature);
        if (isNaN(temp)) return setConvertedTemperature('');
    
        let result = unit === 'Celsius' ? ((temp - 32) * 5) / 9 :(temp * 9) / 5 + 32;
    
        
        result = parseInt(result); 
    
        setConvertedTemperature(result + (unit === 'Celsius' ? ' °C' : ' °F'));
      }
    


    const handleClear = () => {
        setTemperature("");
        setConvertedTemperature("");
      }
    
  return (
    <div>
         <Container className="mt-5 bg-info w-50 h-400">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Temperature Converter</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter Temperature</Form.Label>
              <Form.Control  type="text" value={temperature}
                onChange={(e)=>{setTemperature(e.target.value)}}  placeholder="Enter temperature"/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Unit</Form.Label>
              <Form.Select  value={unit} onChange={(e) => setUnit(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
              </Form.Select>
            </Form.Group>

            <div className=" text-left mb-3">
            {convertedTemperature && <p>{convertedTemperature}</p>}
            </div>

            <div className="d-flex justify-content-between">
              <Button variant="primary" className=" btn btn-dark me-4" onClick={handleConvert}>
                Convert
              </Button>
              <Button variant="secondary" className="btn btn-light"onClick={handleClear} >
                Clear
              </Button>
              </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Home