import { Container, Row, Col, Form } from 'react-bootstrap'
// import City from './City'
import uniqid from 'uniqid'
import { fetchCity } from "../redux/actions/index.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToCityAction } from '../redux/actions/index.js'
import City from './City'

const MainPage = () => {
    const [query, setQuery] = useState('')
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState([])
    const params = useParams()

    const dispatch = useDispatch();
    const city = useSelector((state) => state.city.elements)
    
  const getCity = async () => {
    try {
      const response = await fetch(baseEndpoint  + query + '&appid=' + '5849f3063631061f317a5b8542af8b1c')
      const data = await response.json()
      
      setCities(data)
      dispatch(addToCityAction(data))
      console.log("City: ", data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setSelectedCity(selectedCity)
    console.log(city)

  }, [selectedCity])

    // state = {
    //     query: '',
    //     jobs: []
    // }

    const baseEndpoint = 'http://api.openweathermap.org/geo/1.0/direct?q='
    const apiKey = process.env.REACT_APP_API_KEY

    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        getCity()
        
    }


        return (
            <Container className="searchPage">
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1>Weather Search App</h1>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="search" onChange={handleChange} value={query} placeholder="Type and press enter" />
                        </Form>
                    </Col>
                   <Col xs={10} className='mx-auto mb-5'>
                        {
                            cities.map((city) =>( <City key={uniqid()} onChange={handleChange} data={cities} />))
                        }
                    </Col> 
                </Row>
            </Container>
        )
    }

export default MainPage