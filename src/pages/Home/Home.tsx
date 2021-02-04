import { useHistory } from "react-router-dom"
import { Title } from "../../components/Title/Title"
import logo from "../../images/logo.png"
import { GetStarted, Header, Subtitle } from "./Home.style"

export const Home = () => {
  const history = useHistory()

  const btnClick = () => {
    history.push("/new")
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header className="flex flex-col justify-center items-center w-full">
        <img src={logo} className="w-44 flex justify-self-center" alt="logo" />
        <div className="mt-20">
          <Title
            text="Welcome to SIMPLICY Bitcoin Wallet"
            className="text-5xl"
          />
          <Subtitle className="mt-5">
            Connecting you to Bitcoin ERC-20 Smart Contracts
          </Subtitle>
        </div>
        <GetStarted
          type="button"
          className="rounded-3xl mt-10"
          onClick={btnClick}
        >
          Get Started
        </GetStarted>
      </Header>
    </div>
  )
}

export default Home
