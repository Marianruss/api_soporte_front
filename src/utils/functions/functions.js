
const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');


const firebaseConfig = {
    apiKey: "AIzaSyCZ_GdNrTQ4UnbFE5hG72BjOMmd3qp69uI",
    authDomain: "support-api-da35e.firebaseapp.com",
    projectId: "support-api-da35e",
    storageBucket: "support-api-da35e.appspot.com",
    messagingSenderId: "49503891323",
    appId: "1:49503891323:web:876c6c49fca16d8bef57de"
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);






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



async function getImgUrl(imgs) {

    for (let i = 0; i < imgs.length; i++) {
        try {
            const url = await getDownloadURL(ref(storage, imgs[i]));
            console.log(url);
        } catch (error) {
            console.log(error);
        }

    }
};


export const uploadImg = async (imgs) => {
    // Begin file upload
    const imgPaths = [];
    console.log(imgs.length)
    for (let i = 0; i < imgs.length; i++) {
        try {
            const imgRef = ref(storage, `images/${imgs[i].name}`)
            await uploadBytes(imgRef, imgs[i]).then(async (res) => {
                console.log(`img ${i} uploaded`)
                console.log(res)
                await imgPaths.push(res.metadata.fullPath)
            })
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(imgPaths)
    getImgUrl(imgPaths)
}



