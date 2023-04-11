import { FC } from "react"
// import FadeLoader from "react-spinners/FadeLoader"
import FadeLoader from "react-spinners/FadeLoader";
import { LoadingContainer } from "./loading"
export const Loading: FC = () => {
  return (
    <LoadingContainer>
      <FadeLoader color="#000000" />
      {/* <ClipLoader size={ } /> */}
    </LoadingContainer>
  )
}
