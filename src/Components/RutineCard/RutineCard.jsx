import React from "react"
import { useContext } from "react"
import {ExerciseContext} from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

function RutineCard ({name}){
    const context = useContext(ExerciseContext)
    return(
        <div className=" w-80 h-10 overflow-y-auto flex justify-center items-center border border-solid border-gray-300 rounded-lg mb-3 relative px-4">
            <p>{name}</p>
        </div>
    )
}

export default RutineCard