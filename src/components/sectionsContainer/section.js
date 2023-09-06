

export const Section = ({item}) =>{



    return(
        <div className="w-400 h-250 justify-between bg-teal-100 self-center flex flex-col gap-y-50 rounded-xl">
            <p className="ml-20 mt-20 align-center justify-self-center text-black text-2xl m-0 font-yoizen">{item}</p>
            <p className="ml-20 mr-20 text-xl align-self-center">Entiende como enviar mensajes salientes de mail desde el agente web</p>
            <button className="self-end mr-20  text-xl text-black text-xl font-yoizen">Ver más...</button>
        </div>
    )
}