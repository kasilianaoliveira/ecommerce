
import BannerImg from "../../assets/Banner.jpg";
import { BsArrowRight } from "react-icons/bs";

import { BannerContainer, BannerTitle, ButtonCard, ContentCard, DescriptionTitle, ImageBanner } from "./banner";

export const Banner = () => {


  return (
    <BannerContainer>
      <ContentCard>
        <BannerTitle>
          Escolha o seu novo tênis
        </BannerTitle>
        <DescriptionTitle>
          Coleção nova de tênis esportivo
        </DescriptionTitle>
        <ButtonCard>
          <BsArrowRight />
          Veja mais
        </ButtonCard>
      </ContentCard>
      <ImageBanner src={BannerImg} alt="Imagem de uma pessoa correndo" />
    </BannerContainer>
  )
}
