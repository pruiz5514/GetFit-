import {useState, useEffect } from "react";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Pecho (){


    const [items,setItems] = useState(null)
    
    useEffect (() =>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9373257537msh4d782357a49d8cbp1db691jsnba1982b08725',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest?limit=20',options)
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

    return(
        <>
            <Layout>
                <h1 className="mb-6 text-2xl font-bold">Pecho</h1>
                <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg">
                    {
                        items?.map((item)=>(
                            <Card
                                key={item.id}
                                data = {item}
                            />
                        ))
                    }
                </div>

            </Layout>
        </>
    )
}

export default Pecho