import { createContext, useState, useEffect } from "react";

export const ExerciseContext = createContext()

export const ExerciseProvider = ({children}) =>{

    const [items,setItems] = useState(null)
    const [group, setGroup] = useState("")
    


    useEffect (() =>{
        if(group){
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9373257537msh4d782357a49d8cbp1db691jsnba1982b08725',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            };
            fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${group}?limit=10`,options)
            .then(response => response.json())
            .then(data => setItems(data))
        }

    },[group])



    return(
        <ExerciseContext.Provider value={{
            items,
            setItems,
            group,
            setGroup,
        }}>
            {children}
        </ExerciseContext.Provider>
    )
}