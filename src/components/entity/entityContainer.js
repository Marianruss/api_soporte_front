import { useParams } from "react-router"
import { EntityItem } from "./entityItem"
import { useState, useEffect } from "react"
import { Loader } from "../utils/loader"


export const Entity = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { entity } = useParams()

    const url = `http://localhost:8080/api/${entity}`
    const fetchInfo = async () => {
        return await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                const response = res.json()
                    .then((d) => {
                        setData(d)
                        setLoading(false)

                        console.log(d)
                    })
            })
    }

    useEffect(() => {
        // console.log(fetchInfo())
        fetchInfo()

    }, [entity])


    console.log(data)
    return (
        loading
            ? <Loader />
            : <div className="grid grid-cols-4 mt-100 gap-y-50  justify-items-center items-center justify-center mt-50">
                {data.map((item) => { return <EntityItem item={item} key={item} entity={entity} /> })}
            </div>
    )
}