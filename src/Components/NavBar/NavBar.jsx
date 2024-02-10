import {useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom"
import {ExerciseContext} from '../../Context'
import { CgGym } from "react-icons/cg";

function NavBar () {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ExerciseContext)

    return(
        <nav className="flex justify-between items-center w-full pr-14 pl-14 bg-white h-20 fixed top-0 z-10" >
            <div >
                <ul className="flex gap-6 items-center"> 
                    <li className="font-bold text-3xl">
                        <NavLink 
                            to='/'
                        >
                            GetFit
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/'
                            className={({isActive})=>
                                isActive?activeStyle:undefined
                            }
                        >
                            Incio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/pecho'
                            className={({isActive})=>
                            isActive?activeStyle:undefined
                            }
                            onClick={()=>context.setGroup("chest")}
                        >
                                Pecho
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/brazo'
                            className={({isActive})=>
                                isActive?activeStyle:undefined
                            }
                            onClick={()=>context.setGroup("upper%20arms")}
                        >
                                Brazo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/pierna'
                            className={({isActive})=>
                                isActive?activeStyle:undefined
                            }
                            onClick={()=>context.setGroup("upper%20legs")}
                        >
                                Pierna
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/espalda'
                            className={({isActive})=>
                            isActive?activeStyle:undefined
                            }
                            onClick={()=>context.setGroup("back")}
                        >
                                Espalda
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/cardio'
                            className={({isActive})=>
                            isActive?activeStyle:undefined
                            }
                            onClick={()=>context.setGroup("cardio")}
                        >
                                Cardio
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                
                <ul className="flex gap-7 items-center ">
                    <li>
                        <button onClick={()=>(context.setOpenModalList(true))} className=" flex flex-row items-center cursor-pointer"><CgGym className="w-7 h-7 mr-2"/> <span>{context.exerciseCounter}</span></button>
                        
                    </li>
                    <li>
                        <NavLink 
                            to='/rutina'
                            className={({isActive})=>
                            isActive?activeStyle:undefined
                            }
                        >
                                Rutina
                        </NavLink>
                    </li>   
                    <li>Iniciar Sesion</li>
                    <li> <button className=" bg-blue-500 text-white rounded-lg py-2 px-3 font-bold"> Crear una cuenta </button></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar