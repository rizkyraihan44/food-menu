import '../styles/style.css'
const Food = ({ imgSrc, title, desc, price, stock }) => {
  return (
    <div className="card">
      
      <img src={imgSrc} alt={title} />
      <div className='container'>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className='status'>
        <span>Rp.{price}</span>
        <span>{stock ? 'Tersedia' : 'Stok habis'}</span>
      </div>
      </div>
    </div>
  )
}


export default Food