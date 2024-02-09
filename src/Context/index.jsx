import { createContext, useState, useEffect } from "react";

export const ExerciseContext = createContext()

export const ExerciseProvider = ({children}) =>{

    //Llamado a la API por grupo muscular
    const [items,setItems] = useState(null)

    // Grupo muscular 
    const [group, setGroup] = useState("")

    useEffect (() =>{
        if(group){
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '08dcbb7b0emshda08499dfca00b9p12ae9djsn748ef7da98b5',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            };
            fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${group}?limit=2`,options)
            .then(response => response.json())
            .then(data => setItems(data))
        }

    },[group])

    //Modal de informacion del ejercicio
    const [openModal, setOpenModal] = useState(true)



    // Llamado a la API para informacion de cada ejercicio
    const [exerciseInfo, setExerciseInfo] = useState(null)

    const [exerciseName, setExerciseName] = useState ("")

    const ModalHandelClick = (exercise) =>{
        setOpenModal(true)
        console.log(exercise)
        const exerciseApi = exercise.replace(/ /g, "%20")
        setExerciseName(exerciseApi)
    }

    useEffect(()=>{
        if(exerciseName){
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '08dcbb7b0emshda08499dfca00b9p12ae9djsn748ef7da98b5',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            };
    
            fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${exerciseName}?limit=10`,options)
            .then(response => response.json())
            .then(exercise => setExerciseInfo(exercise))
        }

    }, [exerciseName])



    return(
        <ExerciseContext.Provider value={{
            items,
            setItems,
            group,
            setGroup,
            openModal,
            setOpenModal,
            ModalHandelClick,
            exerciseInfo,
            setExerciseInfo,
            exerciseName,
            setExerciseName
        }}>
            {children}
        </ExerciseContext.Provider>
    )
}