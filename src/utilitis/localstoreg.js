const getstoredPhone =()=>{
    const storedPhone = localStorage.getItem("phone")
    if (storedPhone) {
        const storeData = JSON.parse(storedPhone)
        return storeData
    }
    else{
        return [];
    }
}

const addTotalPhone = (id) =>{
    const storedPhonDB = getstoredPhone();
    if (storedPhonDB.includes(id)) {
        alert("asiiiiii")
    }
    else{
        storedPhonDB.push(id)
        const data = JSON.stringify(storedPhonDB)
        localStorage.setItem("phone" , data)
    }
}
export{addTotalPhone , getstoredPhone}