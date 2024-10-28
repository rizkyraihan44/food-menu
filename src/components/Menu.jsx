import foodMenu from "../data"
import Food from "./Food"

const Menu = () => {
  return (
    <div>

      {
        foodMenu.map((item) => (
          <Food key={item.nama} imgSrc={item.foto} title={item.nama} desc={item.deskripsi} />
        ))
      }
    </div>
  )
}

export default Menu