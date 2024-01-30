import {ExerciseProvider} from '../../Context'
import './App.css'
import NavBar from '../../Components/NavBar/NavBar'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Pecho from '../Pecho'
import Brazo from '../Brazo'
import Pierna from '../Pierna'
import Espalda from '../Espalda'

function AppRoutes() {
  let routes = useRoutes([
    { path:'/', element: <Home/>},
    { path:'/pecho', element: <Pecho/>},
    { path:'/brazo', element: <Brazo/>},
    { path:'/pierna', element: <Pierna/>},
    { path:'/espalda', element: <Espalda/>},
  ])

  return routes
}

function App() {



  return (
    <>
    <ExerciseProvider>
      <BrowserRouter>
          <NavBar/>
          <AppRoutes/>
        </BrowserRouter>
    </ExerciseProvider>

    </>
  )
}

export default App
