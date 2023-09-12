import { Link } from "react-router-dom"
import "./css/item.css"

const Item = ({ producto }) => {
    return(
        <article className="item">
            <picture>
                <img src={producto.image} alt={producto.name} className="imgBook"/>
            </picture>
            <div>
                <h3>{producto.title}</h3>
                <p><strong>$</strong>{producto.price}</p>
                <Link to={`/item/${producto.id}`} className="btn-detalles">Ver detalle</Link>
            </div>



        </article>
    )
}

export default Item



            
           