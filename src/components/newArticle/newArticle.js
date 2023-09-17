import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ArticleForm } from "./newArticleForm"


export const NewArticle = () => {



    return (
        <div className="flex flex-col items-center justify-content-center  ">
            <div className="bg-teal-100  mt-50 w-full flex flex-col m-auto  overflow-y-scroll">
                <ArticleForm/>
            </div>
        </div>
    )
}