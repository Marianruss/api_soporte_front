import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faS, faSearch, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
export const Navbar = () => {


    return (
        <div>
            <div className="h-50 bg-gray-300 flex flex-row gap-x-50 justify-between items-center">
                <div className="flex flex-row gap-x-50">
                    <Link to={"/articles/agent"}><p className="text-black ml-50 mt-5 text-xl font-yoizen">Agente</p></Link>
                    <Link to={"/articles/supervisor"}><p className="text-black mt-5 font-yoizen text-xl">Supervisor</p></Link>
                    <Link to={"/articles/admin"}><p className="text-black mt-5 font-yoizen text-xl">Administrador</p></Link>
                </div>

                <div className="flex flex-row items-center">
                    <Link to={"/newArticle"}><button className="flex flex-row items-center mr-20 bg-gray-400 p-5 rounded hover:bg-gray-600 hover:text-white text-xl gap-10">
                        <FontAwesomeIcon icon={faPlus}/>
                        Nuevo
                    </button></Link>
                    <button className="flex flex-row items-center bg-gray-400 p-5 rounded hover:bg-gray-600 hover:text-white mr-20 ">
                        <FontAwesomeIcon icon={faHeart} className="mr-10" />
                        <p className=" font-yoizen text-xl">Favoritos</p>
                    </button>
                    <FontAwesomeIcon icon={faSearch} className="bg-gray-400 p-10 rounded" />
                    <input className="border-black mr-50 p-5 rounded" placeholder="Search..."></input>
                </div>
            </div>

        </div>
    )
}