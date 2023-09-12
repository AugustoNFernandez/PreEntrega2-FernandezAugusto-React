import "./css/ItemDetail.css"

const ItemDetail = ({ item }) => {
    return (
        <div className="containerDetail">
            <div className="item-list"> 
                <img className="imgDetail" src={item.image} width={100} alt={item.title} />
                <h3>Titulo: {item.title}</h3>
                <p><strong>Descripción: </strong>{item.description}</p>
                <p>Autor: {item.autor}</p>
                <p><strong>Categoría: </strong>{item.category}</p>
                <p><strong>Precio: $ </strong>{item.price}</p>
            
            </div>
        </div>
    )
}

export default ItemDetail


      