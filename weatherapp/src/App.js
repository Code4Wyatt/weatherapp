import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore } from "../src/redux/store/index.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from "../src/components/MainPage"

function App() {
  return (
    <Provider store={configureStore}>
    <BrowserRouter>
     
       {/* <NavBar />  */}
        <div className="app">
          <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/:coordinates" element={<WeatherResults/>}/> */}
          </Routes>
          </div>
    </BrowserRouter>
    </Provider>
      
  )
}

export default App;
