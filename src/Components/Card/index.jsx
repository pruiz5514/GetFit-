function Card () {
    return(
        <div className="w-56 h-60 bg-white cursor-pointer">
            <figure className="w-full object-cover">
                <img className="rounded-lg" src="https://media.istockphoto.com/id/1281364997/es/foto/fit-hombre-entrenando-en-la-prensa-de-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=PHHES14ODoH-w5U3hVhFyeFxqzMmbX1v0utsHAvqFPw=" alt="bench-press" />
            </figure>
            <p className="px-5 mt-4 font-bold">Prensa</p>
        </div>
    )
}

export default Card