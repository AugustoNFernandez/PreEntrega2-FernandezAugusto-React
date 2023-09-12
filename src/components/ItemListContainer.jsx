import { useEffect, useState } from "react";
import { pedirDatos } from "./pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./css/ItemListContainer.css"

const ItemListContainer = () => {

    const [ productos, setProductos ] = useState([]);
    const categoryId = useParams().category;
    

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if(categoryId){
                    setProductos(res.filter((prod) => prod.category === categoryId));
                } else{
                    setProductos(res);
                }
            })
    }, [categoryId])

    return(
        <div className="item-list-container">
                    <ItemList productos={productos} />
            </div>
        
    )
}

export default ItemListContainer 