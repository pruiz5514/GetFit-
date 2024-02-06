import {useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom"
import {ExerciseContext} from '../../Context'

function NavBar () {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ExerciseContext)

    return(
        <nav className="flex justify-between items-center w-full pr-14 pl-14 bg-white h-20 fixed top-0" >
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
                <ul className="flex gap-9
                ">
                    <li>Iniciar Sesion</li>
                    <li>Crear una cuenta</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar