import '../styles/style.css'
// eslint-disable-next-line react/prop-types
const Food = ({ imgSrc, title, desc, price, stock }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className='container'>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className='status'>
        <span>Rp.{price}</span>
        <span className={stock ? 'green' : 'red'}>{stock ? 'Tersedia' : 'Stok habis'}</span>
      </div>
      <button>Beli</button>
    </div>
  )
}


export default Food