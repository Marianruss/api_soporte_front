// const axios = require("axios")
// // const fs = require("file")

export const fetchInfo = (url, setData, setLoading) => {
    return fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then((res) => {
            const response = res.json()
                .then((data) => {
                    setData(data)
                    if (setLoading) {
                        setLoading(false)
                    }

                    return
                })

        })
}


export const parseString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).replace("-", " ")
}


export const uploadImagesToBackend = async (formData) => {
    // console.log()
    try {
        const test = await fetch("http://localhost:8080/files/upload", {
            method: "POST",
            // headers: { "Content-Type": "multi-form/data" },
            body: formData
        })
        console.log(test)
    }
    catch (err) {
        console.log(err)
    }

}


export const uploadImg = async (img) => {
    // Begin file upload
    console.log("Uploading file to Imgur..");
    const formData = new FormData()
    formData.append("image", img)

    const apiUrl = 'https://api.imgur.com/3/image';
    const apiToken = "779ad106e97aa48";


    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            Authorization: `Client-ID ${apiToken}`,
            Cookie: 'IMGURSESSION=014a59b6eef158587ecece1fe9997e33; _nc=1'
        },
        body: {img},
    })
    console.log(response)
    return response
}

