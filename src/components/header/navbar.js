import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faS, faSearch, faHeart } from "@fortawesome/free-solid-svg-icons"
export const Navbar = () => {


    return (
        <div>
            <div className="h-50 bg-gray-300 flex flex-row gap-x-50 justify-between items-center">
                <div className="flex flex-row gap-x-50">
                    <p className="text-black ml-50 mt-5 font-yoizen">Agente</p>
                    <p className="text-black mt-5 font-yoizen">Supervisor</p>
                    <p className="text-black mt-5 font-yoizen">Administrador</p>
                </div>

                <div className="flex flex-row items-center">
                    <button className="flex flex-row items-center">
                        <FontAwesomeIcon icon={faHeart} className="mr-10" />
                        <p className="mr-20 font-yoizen">Favoritos</p>
                    </button>
                    <FontAwesomeIcon icon={faSearch} className="bg-gray-500 p-10" />
                    <input className="border-black mr-50 p-5" placeholder="Search..."></input>
                </div>
            </div>

        </div>
    )
}