
// eslint-disable-next-line react/prop-types
const Food = ({ imgSrc, title, desc }) => {
  return (
    <>
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </>
  )
}


export default Food