import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight,faSpinner } from "@fortawesome/free-solid-svg-icons"


export const Loader = () => {
    return(

    <div className='flex flex-col items-center justify-center w-screen mt-100 w-100 mb-20'>
    <FontAwesomeIcon className=' h-50' icon={faSpinner} spin size="2xl" style={{color: "#000000",}} />
    </div>
    )
}