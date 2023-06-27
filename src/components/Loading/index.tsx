import { FC } from "react"
// import FadeLoader from "react-spinners/FadeLoader"
import FadeLoader from "react-spinners/FadeLoader";
import { LoadingContainer } from "./loading"
interface LoadingProps {
  message?: string
}

export const Loading: FC<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <FadeLoader color="#000000" />
      {/* <ClipLoader size={ } /> */}
    </LoadingContainer>
  )
}
