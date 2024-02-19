import React from "react"
import { useContext } from "react"
import {ExerciseContext} from '../../Context'
import Layout from "../../Components/Layout"
import ExerciseList from "../../Components/ExerciseList/ExerciseList"
import ModalProgress from "../../Components/ModalProgress"

function RutinaSelect(){
    const context = useContext(ExerciseContext)
    const currentPath = window.location.pathname
    const index = currentPath.substring(currentPath.lastIndexOf('/')+1)

    const handelModalProgress = (exerciseName)=>{
        context.setOpenModalProgress(true)
        context.setModalProgressName(exerciseName)
    }

    return(
        <Layout>
            <div  className="mb-2 cursor-pointer">
                    {context.rutine?.[index]?.exercises.map(exercise=>(
                        <div onClick={()=>(handelModalProgress(exercise.name))}>
                            <ExerciseList
                                id={exercise.id}
                                key={exercise.id}
                                title = {exercise.name}
                                gifUrl = {exercise.gifUrl}
                            />
                        </div>

                    ))}
            </div>
            {context.openModal && (
                    context.exerciseInfo?.map((item)=>(
                        <ModalInfo 
                            key = {item.id}
                            dato = {item}
                        />
                    ))    
                    )
                }
            {context.openModalProgress && (
                <ModalProgress/>
            )}
        </Layout>
    )
}

export default RutinaSelect