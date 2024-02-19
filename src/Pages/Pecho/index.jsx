import {useState, useEffect, useContext } from "react";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import {ExerciseContext} from '../../Context'
import ModalInfo from "../../Components/ModalInfo/ModalInfo";
import ModaList from "../../Components/ModalList";
import ModalProgress from "../../Components/ModalProgress";

function Pecho (){
    const context = useContext(ExerciseContext)
    
    return(
        <>
            <Layout>
                <h1 className="mb-6 text-2xl font-bold">Pecho</h1>
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
                    <ModalProgress
                        key={context.ModalProgressName}
                        name = {context.ModalProgressName}
                    />   
                    )
                }
                {context.openModalList &&(
                    <ModaList/>
                )}
            </Layout>
        </>
    )
}

export default Pecho