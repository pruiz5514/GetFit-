import { useContext } from "react"
import Layout from "../../Components/Layout"
import {ExerciseContext} from '../../Context'

function Brazo (){

    const context = useContext(ExerciseContext)

    return(
        <>
            <Layout>
                Farru
            </Layout>
        </>
    )
}

export default Brazo