import foodMenu from "../data"
import Food from "./Food"
import "../styles/style.css"

const Menu = () => {
  return (
    <div className="menu">

      {
        foodMenu.map((item) => (
          <Food key={item.nama} imgSrc={item.foto} title={item.nama} desc={item.deskripsi} price={item.harga} stock={item.stok} />
        ))
      }
    </div>
  )
}

export default Menu