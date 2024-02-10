import {useState, useEffect, useContext } from "react";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import {ExerciseContext} from '../../Context'
import ModalInfo from "../../Components/ModalInfo/ModalInfo";
import ModaList from "../../Components/ModalList";

function Pierna (){
    const context = useContext(ExerciseContext)
    return(
        <>
            <Layout>
                <h1 className="mb-6 text-2xl font-bold">Pierna</h1>
                <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg">
                    {
                        context.items?.map((item)=>(
                            <Card
                                key={item.id}
                                data = {item}
                            />
                        ))
                    }
                </div>
                {context.openModal && (
                    context.exerciseInfo?.map((item)=>(
                        <ModalInfo 
                            key = {item.id}
                            exercise = {item}
                        />
                    ))
                    
                    )
                }
                {context.openModalList &&(
                    <ModaList/>
                )}
            </Layout>
        </>

        
    )
}

export default Pierna
