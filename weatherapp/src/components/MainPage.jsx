import { Container, Row, Col, Form } from 'react-bootstrap'
// import City from './City'
import uniqid from 'uniqid'
import { fetchCity } from "../redux/actions/index.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// const mapDispatchToProps = (dispatch) => ({
//     fetchJobs: (baseEndpoint, query) => dispatch(fetchJobs(baseEndpoint, query)),
//   });

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [city, setCity] = useState([])
    const [selectedCity, setSelectedCity] = useState([])
    const params = useParams()
    
  const getCity = async () => {
    try {
      const response = await fetch(baseEndpoint + query)
      const { data } = await response.json()
      
      setCity(data)
      console.log("City: ", data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setSelectedCity(selectedCity)
    console.log(selectedCity)
  }, [selectedCity])

    // state = {
    //     query: '',
    //     jobs: []
    // }

    const baseEndpoint = 'https://openweathermap.org/api/geocoding-api'


    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        getCity()
        console.log(data)
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
                            jobs.map((jobs) =>( <Job key={uniqid()} onChange={handleChange} data={jobs} />))
                        }
                    </Col>
                </Row>
            </Container>
        )
    }

export default SearchPage