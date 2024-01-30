import { NavLink } from "react-router-dom"

function NavBar () {
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className="flex justify-between items-center w-full pr-14 pl-14 bg-white h-20" >
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
                            to='pecho'
                            className={({isActive})=>
                            isActive?activeStyle:undefined
                        }
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
                        >
                                Espalda
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