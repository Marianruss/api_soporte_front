import { useState, useEffect } from "react"
import { SectionItem } from "./sectionItem"
import { useParams } from "react-router"
import { Loader } from "../utils/loader"
import { fetchInfo } from "../../utils/functions/functions"


export const Section = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { entity, section } = useParams()

    const url = `http://localhost:8080/api/${entity}/${section}`

    

    useEffect(() => {
        setLoading(true)
        fetchInfo(url,setData,setLoading)
    }, [])


    return (
        loading
            ? <Loader/>
            : <div>
                <div className="max-w-full grid lg:grid-cols-4 gap-y-50 cols-span-2 sm:grid-cols-1 justify-items-center align-items-center justify-center mt-50">
                    {data.map((item) => <SectionItem key={item.value} item={item} entity={entity} />)}
                </div>


            </div>
    )
}
