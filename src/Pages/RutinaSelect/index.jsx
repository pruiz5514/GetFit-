import React from "react"
import { useContext } from "react"
import {ExerciseContext} from '../../Context'
import Layout from "../../Components/Layout"
import ExerciseList from "../../Components/ExerciseList/ExerciseList"

function RutinaSelect(){
    const context = useContext(ExerciseContext)
    const currentPath = window.location.pathname
    const index = currentPath.substring(currentPath.lastIndexOf('/')+1)
    return(
        <Layout>
            <div className="mb-2">
                    {context.rutine?.[index]?.exercises.map(exercise=>(
                        <ExerciseList
                            id={exercise.id}
                            key={exercise.id}
                            title = {exercise.name}
                            gifUrl = {exercise.gifUrl}
                        />
                    ))}
            </div>
        </Layout>
    )
}

export default RutinaSelect