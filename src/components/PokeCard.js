function PokeCard({image, name, description}){
    return (
      <li>
        <img src={image} alt={description} />
        <h3>{name}</h3>
        <p>{description}</p>
      </li>
    )
  }
export default PokeCard  