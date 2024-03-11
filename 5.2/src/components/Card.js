import "./style.css"

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={data.imgUrl} alt="" />
      <h2 className="card-title padding-left">{data.title}</h2>
      <p className="padding-left">{data.description}</p>
      <div className="links-container padding-left">
        <a className="link" href={data.link1}>
          SHARE
        </a>
        <a className="link" href={data.link2}>
          EXPLORE
        </a>
      </div>
    </div>
  );
};
export default Card;
