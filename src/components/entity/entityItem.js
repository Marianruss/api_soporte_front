import { Link } from "react-router-dom";

import { parseString } from "../../utils/functions/functions";

export const EntityItem = ({ item, entity }) => {


    let itemParsed = parseString(item)


    return (
        <Link to={`/articles/${entity}/${item}`}> <div className="w-400 h-100 justify-between bg-teal-100 hover:bg-teal-300 duration-200 self-center flex flex-col gap-y-50 rounded-xl">
            <p className="ml-20 mt-20 align-center justify-self-center text-black text-2xl m-0 font-yoizen">{itemParsed}</p>
        </div></Link>
    )
}