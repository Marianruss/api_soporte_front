import { useState, useEffect } from "react"
import { SectionItem } from "./sectionItem"
import { Article } from "../article/article"
import { useParams } from "react-router"
import { Loader } from "../utils/loader"


export const Section = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { entity, section } = useParams()

    const url = `http://localhost:8080/api/${entity}/${section}`

    const fetchInfo = () => {
        return fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                const response = res.json()
                    .then((data) => {
                        setData(data)
                        setLoading(false)
                        console.log(data)
                    })
            })
    }

    useEffect(() => {
        // console.log(fetchInfo())
        setLoading(true)
        fetchInfo()
    }, [])

    console.log(data)
    return (
        loading
            ? <Loader/>
            : <div>
                <div className="max-w-full grid lg:grid-cols-3 gap-y-50 cols-span-2 sm:grid-cols-1 justify-items-center align-items-center justify-center mt-50">
                    {data.map((item) => <SectionItem key={item.value} item={item} entity={entity} />)}
                </div>


            </div>
    )
}
