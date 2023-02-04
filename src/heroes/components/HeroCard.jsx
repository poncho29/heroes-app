import { Link } from "react-router-dom"

const CharactersByHero = ({alter_ego, characters}) => {
  if (alter_ego === characters) return;

  return <p>{ characters }</p>;
}

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearence,
  characters
}) => {

  const heroImgUrl = `/assets/heroes/${id}.jpg`;

  // const charactersByHero = <p>{ characters }</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImgUrl} alt={superhero} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/* { (alter_ego !==  characters) && charactersByHero } */}
              <CharactersByHero characters={characters} alter_ego={alter_ego} />
              
              <p className="card-text">
                <small className="text-muted">{ first_appearence }</small>
              </p>
              
              <Link to={`/hero/${id}`}>
                Más..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard