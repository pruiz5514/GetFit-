import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import {ExerciseContext} from '../../Context'

function ExerciseList (props){
    
    const { id, title, gifUrl, removeExercise} = props

    const context = useContext(ExerciseContext)

    let renderXmarkIcon 

    if(removeExercise){
        renderXmarkIcon = <XMarkIcon onClick={()=> removeExercise(id)} className='w-6 h-6 absolute right-2 cursor-pointer'/>
    }

    return(
        <div className="flex w-full border border-solid border-gray-300 rounded-lg pl-4 pr-8 py-2 items-center mb-4 relative">
            <figure className="w-24 h-24 mr-4">
                <img className="w-full h-full rounded-lg object-cover" src={gifUrl} alt={title} />
            </figure>
            <p >{title.charAt(0).toUpperCase()+ title.slice(1)}</p>
            {renderXmarkIcon}
            
        </div>
    )


}

export default ExerciseList