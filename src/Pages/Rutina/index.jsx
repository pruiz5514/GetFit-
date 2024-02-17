import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"
import { useContext } from "react"
import {ExerciseContext} from '../../Context'
import ExerciseList from "../../Components/ExerciseList/ExerciseList"
import RutineCard from "../../Components/RutineCard/RutineCard"
import ModaList from "../../Components/ModalList";


function Rutina () {
    const context = useContext(ExerciseContext)

    return(
        <Layout>
            <h1 className="font-bold text-2xl mb-4">Rutinas</h1>


            <div >
                {context.rutine?.map((rutina, index) =>(
                    <Link key={index} to={`${index}`}>
                        <RutineCard
                            name = {rutina.name}
                        />
                    </Link>

                ))}
            </div>

                    
            {context.openModalList &&(
                    <ModaList/>
            )}
        </Layout>
    )
    
}

export default Rutina