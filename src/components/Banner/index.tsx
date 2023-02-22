
import BannerImg from "../../assets/Banner.jpg";
import { BsArrowRight } from "react-icons/bs";

import "./styles.css"

export const Banner = () => {


  return (
    <div className="container-image">
      <div className="content-card">
        <h3>Escolha o seu novo tênis</h3>
        <p>Coleção nova de tênis esportivo</p>
        <button className="card-button">
          <BsArrowRight />
          Veja mais
        </button>
      </div>
      <img src={BannerImg} alt="Imagem de uma pessoa correndo" className="image-banner" />
    </div>
  )
}
