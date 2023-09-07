
export const Article = ({ item }) => {

    return (
        <div className="self-center my-50 mx-0">
            <p className="w-1500 text-3xl mb-50 ">{item.step}</p>
            <img src={`${item.img}`} className="border-black border-2"></img>
        </div>
    )
}