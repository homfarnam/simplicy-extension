import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../../components/Button/Button"
import { Title } from "../../components/Title/Title"
import ImportWallet from "../../images/download-alt.svg"
import CreateWallet from "../../images/thin-plus.svg"

const Card = styled.div`
  font-family: Helvetica;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 10px;
  justify-content: space-evenly;
  width: 388px;
  height: 278px;
`

const New = () => {
  const history = useHistory()

  const toImportPage = () => {
    history.push("/import-wallet")
  }
  return (
    <>
      <div className="flex flex-col justify-center w-full mt-32">
        <Title
          text="New to SIMPLICY Bitcoin Wallet?"
          className="text-5xl justify-center"
        />

        <div className="flex flex-row justify-center mt-16">
          <Card className="mx-10 flex flex-col items-centers">
            <div className="flex flex-col items-center justify-center">
              <img src={ImportWallet} alt="import wallet" className="mb-4" />
              <p className="text-black text-xl font-bold mb-2">
                No, I already have a seed phrase
              </p>
              <p className="text-gray-500">
                Import your existing wallet using a 12 word phrase
              </p>
              <Button
                text="Import Wallet"
                className="mt-10"
                onclick={toImportPage}
              />
            </div>
          </Card>
          <Card className="mx-10 flex flex-col items-centers">
            <div className="flex flex-col items-center justify-center">
              <img src={CreateWallet} alt="import wallet" className="mb-4" />
              <p className="text-black text-xl font-bold mb-2">
                Yes, let's get set up!
              </p>
              <p className="text-gray-500">
                This will create a new wallet and seed phrase!
              </p>
              <Button text="Create Wallet" className="mt-10" />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default New
