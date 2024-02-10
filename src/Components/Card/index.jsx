import { useContext } from 'react'
import {ExerciseContext} from '../../Context'
import { PlusIcon } from '@heroicons/react/24/solid'

function Card (data) {
    const context = useContext(ExerciseContext)

    const addExercises = (event,exersiceData) =>{
        event.stopPropagation();
        context.setCartExcersices([... context.cartExercises, exersiceData])
        console.log(context.cartExercises)
        console.log(context.cartExercises.length)
        context.setExerciseCounter(context.cartExercises.length)
    }

    return(
        <div onClick={()=>(context.ModalHandelClick(data.data.name))} className="w-56 h-50 bg-white cursor-pointer on relative">
            <PlusIcon onClick={(event)=>(addExercises(event,data.data))} className=' w-6 h-6 bg-black rounded-full p-1 font-bold absolute right-0 top-0 text-white'/>
            <figure className="w-full object-cover">
                <img className="rounded-lg" src={data.data.gifUrl} alt={data.data.name} />
            </figure>
            <p className="px-5 mt-4 font-ligth">{data.data.name.charAt(0).toUpperCase()+ data.data.name.slice(1)}</p>
        </div>
    )
}

export default Card