

export const fetchInfo = (url,setData) =>{
    return fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                const response = res.json()
                    .then((data) =>{
                        return data
                    })
                        
            })
    }


