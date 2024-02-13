import React from "react"
import { useContext } from "react"
import ReactDOM from 'react-dom'
import {ExerciseContext} from '../../Context'
import './ModalList.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import ExerciseList from "../ExerciseList/ExerciseList"

function ModaList (){
    const context = useContext(ExerciseContext)

    const removeExercise = (id)=>{
        const filteredExercise = context.cartExercises.filter(exercise => exercise.id != id)
        context.setCartExcersices (filteredExercise)
        context.setExerciseCounter(filteredExercise.length)
    }

    return ReactDOM.createPortal(
        <div className="w-100 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-[rgba(32,35,41,0.8)] z-20">
            <div  className="modalList__textContainer w-1/3 h-3/4 flex flex-col mx-auto bg-white  rounded-lg p-8 relative ">
                <h1 className="font-bold text-xl self-center mb-6">Lista de ejercicios</h1>
                
                <div className="mb-2">
                    {context.cartExercises.map(exercise=>(
                        <ExerciseList
                            id={exercise.id}
                            key={exercise.id}
                            title = {exercise.name}
                            gifUrl = {exercise.gifUrl}
                            removeExercise = {removeExercise}
                        />
                    ))}
                </div>


            </div>
            <button className="modalList__button absolute right-0 top-0 w-9 h-9 bg-slate-300 rounded-full p-1 font-bold" onClick={()=>(context.setOpenModalList(false))}><XMarkIcon/></button>

        </div>,
        document.getElementById('modalList')
    )
    
}

export default ModaList