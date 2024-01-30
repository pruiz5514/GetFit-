function Card (data) {
    return(
        <div className="w-56 h-50 bg-white cursor-pointer">
            <figure className="w-full object-cover">
                <img className="rounded-lg" src={data.data.gifUrl} alt={data.data.name} />
            </figure>
            <p className="px-5 mt-4 font-ligth">{data.data.name.charAt(0).toUpperCase()+ data.data.name.slice(1)}</p>
        </div>
    )
}

export default Card