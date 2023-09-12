import data from "../data.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}  

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((element) => element.id === id);

        if (item) {
            resolve(item)
        }else{
            error: "Inexistente"
        }    
    })
}