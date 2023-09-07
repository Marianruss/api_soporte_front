import { Link } from "react-router-dom"

export const SectionItem = ({item, entity}) =>{



    return(
        <div className="w-400 h-250 justify-between bg-teal-100 hover:bg-teal-300 duration-200 self-center flex flex-col gap-y-50 rounded-xl">
            <p className="ml-20 mt-20 align-center justify-self-center text-black text-2xl m-0 font-yoizen">{item.title}</p>
            <p className="ml-20 mr-20 text-xl align-self-center">{item.description} </p>
            <Link className="self-end mr-20  text-xl text-black text-xl font-yoizen hover:text-gray-900 hover:underline-offset-1" to={`/articles/${entity}/${item.section}/${item.value}`}><button >Ver más...</button></Link>
        </div>
    )
}