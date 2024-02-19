import React from "react"
import { useContext } from "react"
import ReactDOM from 'react-dom'
import {ExerciseContext} from '../../Context'
import './style.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ModalProgress (){
    const context = useContext(ExerciseContext)


    return ReactDOM.createPortal(
        <div className="w-100 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-[rgba(32,35,41,0.8)] z-20">
            <div  className="modal__textContainer w-3/5 h-2/3 flex flex-col mx-auto bg-white  rounded-lg p-8 relative ">
                <div className="flex justify-center mb-4">
                    <h2 className="font-bold">{context.ModalProgressName.charAt(0).toUpperCase() + context.ModalProgressName.slice(1)}</h2>
                </div>
                <form className="flex flex-row justify-start items-center" >
                    <label for="fecha">Fecha</label>
                    <DatePicker className="m-2 w-28 h-8 px-4 border  border-solid border-gray-300 rounded-lg text-black text-sm mr-6"
                        selected={context.date}
                        onChange={(date) => (context.setDate(date))}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        scrollableMonthYearDropdown
                        
                    />
                    <label for="series">Series</label>
                    <input id="series" type="text" className="ml-2 mr-6 w-14 h-8 px-4 border  border-solid border-gray-300 rounded-lg" />
                    <label for="repeticiones">Repeticiones</label>
                    <input id="repeticiones" type="text" className="ml-2 mr-6 w-14 h-8 px-4 border  border-solid border-gray-300 rounded-lg" />
                    <label for="repeticiones">Peso</label>
                    <input id="series" type="text" className="ml-2 mr-6 w-14 h-8 px-4 border  border-solid border-gray-300 rounded-lg" />
                    <button className="bg-blue-500 text-white font-bold rounded-lg w-40 h-9 py-1 self-center ">Enviar</button>
                </form>
            </div>
            <button className="modal__button absolute right-0 top-0 w-9 h-9 bg-slate-300 rounded-full p-1 font-bold" onClick={()=>(context.setOpenModalProgress(false))}><XMarkIcon/></button>

        </div>,
        document.getElementById('modal')
    )
    
}

export default ModalProgress