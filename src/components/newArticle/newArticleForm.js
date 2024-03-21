import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { uploadImg, uploadImagesToBackend } from "../../utils/functions/functions"





export const ArticleForm = () => {

    const [quantity, setQuantity] = useState(0)
    const elements = []
    const [instructions, setInstructions] = useState([])
    const [photo, setPhoto] = useState([])
    const [entity, setEntity] = useState("")


    for (let i = 0; i <= quantity; i++) {
        elements.push(<div className="flex flex-col gap-20 my-50 border-black border-2 w-400" key={i} >
            <label className="flex flex-row mt-10 justify-around max-h-200 self-center" >
                <textarea type="text" className="max-h-100" placeholder="Instrucción" id="instruction" onChange={e => {setInstructions(instructions + e.target.value)}} />
            </label>
            <label className="flex flex-row justify-around gap-20 mb-10 self-center">

                <input filename={photo} onChange={e => setPhoto([...photo,e.target.files[0]])} type="file" accept="image/*" name="image"></input>
            </label>
        </div>)
    }

    // //
    const submit = async event => {
        event.preventDefault()

        const formData = new FormData()
        console.log(photo)

        for (let i = 0; i < photo.length; i++) {
            formData.append("image", photo[i])
        }   

        console.log(photo)
        console.log(entity)
        console.log(instructions[0])

        await uploadImg(photo)
    }



    const handleAddInstruction = () => {
        setQuantity(quantity + 1)
    }

    const handleDeleteInstruction = () => {
        setQuantity(quantity - 1)
    }

    useEffect(() => {

    }, [elements, instructions])

    return (
        <div className="m-auto ">
            <form id="newArticleForm">
                <select className="mt-20" defaultValue="entidad" onChange={e => setEntity(e.target.value)}>
                    <option value="" selected  hidden name="entity">Entidad</option>
                    <option value="agent">Agente</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="admin">Administrador</option>
                </select>
                <div>
                    <div className="grid grid-cols-3 gap-x-100" >{elements}

                        <div className="flex flex-row gap-10">
                            <div onClick={handleAddInstruction} className="flex flex-col border-4 border-dashed cursor-pointer border-black h-100 w-100 self-center justify-center items-center">
                                <FontAwesomeIcon icon={faPlus} className="w-50 h-50" />
                                <p className="text-l font-medium hover:font-bold" name="instruccion">Agregar</p>
                            </div>
                            {quantity >= 1
                                ? <div onClick={handleDeleteInstruction} className="flex flex-col border-4 border-dashed cursor-pointer border-black h-100 w-100 self-center justify-center items-center">
                                    <FontAwesomeIcon icon={faTrash} className="w-50 h-50" />
                                    <p className="text-l font-medium hover:font-bold">Borrar</p>
                                </div>
                                : null}

                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-20 mt-20 mb-20 ml-20">
                    <button type="button" className="p-5 bg-teal-400 rounded" onClick={submit}>Submit</button>
                </div>
            </form>

        </div>
    )
}
