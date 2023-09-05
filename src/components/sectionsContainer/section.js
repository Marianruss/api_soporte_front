

export const Section = ({item}) =>{



    return(
        <div className="w-300 h-150 bg-teal-500 self-center flex flex-col gap-y-50 rounded-xl">
            <p className="ml-20 mt-20 align-center justify-self-center text-black text-xl m-0 font-yoizen">{item}</p>
            <button className="self-end mr-20 mt-20 text-black font-yoizen">Ver mas...</button>
        </div>
    )
}