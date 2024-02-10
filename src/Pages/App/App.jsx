import {ExerciseProvider} from '../../Context'
import './App.css'
import NavBar from '../../Components/NavBar/NavBar'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Pecho from '../Pecho'
import Brazo from '../Brazo'
import Pierna from '../Pierna'
import Espalda from '../Espalda'
import Cardio from '../Cardio/Cardio'
import Rutina from '../Rutina'



function AppRoutes() {
  let routes = useRoutes([
    { path:'/', element: <Home/>},
    { path:'/pecho', element: <Pecho/>},
    { path:'/brazo', element: <Brazo/>},
    { path:'/pierna', element: <Pierna/>},
    { path:'/espalda', element: <Espalda/>},
    { path:'/cardio', element: <Cardio/>},
    { path:'/rutina', element: <Rutina/>},
  ])

  return routes
}

function App() {

  return (
    <>
    <ExerciseProvider>
      <BrowserRouter>
          <AppRoutes/>

          <NavBar/>
        </BrowserRouter>
    </ExerciseProvider>

    </>
  )
}

export default App
