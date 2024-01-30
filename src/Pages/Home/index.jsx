function Home (){
    return(
        <section className='flex justify-between w-4/5 bg-white  mx-auto mt-20'>
            <div className='w-1/2 pr-15'>
                <h1 className='font-semibold text-5xl  mb-4 tracking-wider leading-12'>Seguimiento de entrenamientos</h1>
                <h1 className='font-semibold text-5xl text-blue-500 tracking-wide'>Mide tu progreso</h1>
                <p className='mt-10 text-xl tracking-wide ' >GetFit es una pagina web que permite hacerle segumiento al progreso del entrenamiento.</p>
            </div>
            <div className="w-1/2">
                <img className='w-full object-cover rounded-lg' src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </section>
    )
}

export default Home