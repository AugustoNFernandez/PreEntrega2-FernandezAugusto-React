import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { pedirItemPorId } from "./pedirDatos";
import { useParams } from "react-router-dom";
import "./css/ItemListContainer.css"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;


    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })

    },[id])

    return (
        <div className="item-list-container">
        {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer