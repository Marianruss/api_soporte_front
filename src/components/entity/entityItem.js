import { Link } from "react-router-dom";
import { Loader } from "../utils/loader";

export const EntityItem = ({item,entity}) =>{


    let itemParsed = item.replace("-"," ")
    itemParsed = (item.charAt(0).toUpperCase() + item.slice(1)).replace("-"," ");

    return(
        <div className="w-400 h-250 justify-between bg-teal-100 hover:bg-teal-300 duration-200 self-center flex flex-col gap-y-50 rounded-xl">
            <Link to={`/articles/${entity}/${item}`}><p className="ml-20 mt-20 align-center justify-self-center text-black text-2xl m-0 font-yoizen">{itemParsed}</p></Link>
        </div>
        
    )
}