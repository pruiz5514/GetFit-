import React from "react"
import { useContext } from "react"
import ReactDOM from 'react-dom'
import {ExerciseContext} from '../../Context'
import './Modal.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

function Modal (exercise){
    const context = useContext(ExerciseContext)

    return ReactDOM.createPortal(
        <div className="w-100 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-[rgba(32,35,41,0.8)]">
            <div  className="modal__textContainer w-1/3 h-2/3 flex flex-col mx-auto bg-white  rounded-lg p-8 relative ">
                <div className=" flex flex-col items-center"> 
                    <h1 className="text-2xl font-bold mb-2">{exercise.exercise.name.charAt(0).toUpperCase()+ exercise.exercise.name.slice(1)}</h1>
                    <img className="w-1/2 object-cover mb-8" src={exercise.exercise.gifUrl} alt={exercise.exercise.name} />
                </div>
              
                <p className="text-sm font-light text-justify">{exercise.exercise.instructions}</p>
                
            </div>
            <button className="modal__button absolute right-0 top-0 w-9 h-9 bg-slate-300 rounded-full p-1 font-bold" onClick={()=>(context.setOpenModal(false))}><XMarkIcon/></button>

        </div>,
        document.getElementById('modal')
    )
    
}

export default Modal