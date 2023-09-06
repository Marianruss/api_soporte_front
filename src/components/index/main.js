import { useState, useEffect } from "react"
import {Section} from "../sectionsContainer/section"

export const Main = () => {

    const [data, setData] = useState([])

    const fetchInfo = () => {
        return fetch("http://localhost:8080/api/agent/mensajes-salientes", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                const response = res.json()
                    .then((data) =>{
                        setData(data)
                    })
                        
                // console.log(res.sections)
            })
    }

    useEffect(() => {
        // console.log(fetchInfo())
        fetchInfo()
    }, [])

    console.log(data)
    return (

        <div >
            <div className="max-w-full grid lg:grid-cols-3 gap-y-50 cols-span-2 sm:grid-cols-1 justify-items-center align-items-center justify-center mt-50">
                {data.map((item) =><Section key={item} item={item}/>)}
            </div>


        </div>
    )
}
