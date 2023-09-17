import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchInfo } from "../../utils/functions/functions"
import { Article } from "./article"


export const ArticleContainer = () => {

    const { type, section, entity } = useParams()
    const [data, setData] = useState([])

    // console.log({ type, section })

    const url = `http://localhost:8080/api/${entity}/${section}/${type}`


    

    useEffect(() => {
        fetchInfo(url,setData)
    }, [])



    return (
        <>
            <div className=" flex flex-col gap-y-50 cols-span-2 sm:grid-cols-1 justify-items-center items-center justify-center mt-50">
                {data.map((item) => <Article item={item}/>)}
            </div>

        </>
    )


}



