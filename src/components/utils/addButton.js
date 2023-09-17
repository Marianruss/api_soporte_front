
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export const AddButton = () => {


    return (
        <div className="flex flex-col border-4 border-dashed cursor-pointer border-black h-100 w-100 self-center justify-center items-center">
            <FontAwesomeIcon icon={faPlus} className="w-50 h-50" />
            <p className="text-l font-medium hover:font-bold">Add</p>
        </div>
    )
}