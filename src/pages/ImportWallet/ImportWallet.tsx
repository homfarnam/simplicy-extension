import styled from "styled-components"
import { Button } from "../../components/Button/Button"
import SmallLogo from "../../images/small-logo.png"

const Top = styled.div`
  background: #213445;
  width: full;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: start;
`
const MyTitle = styled.h3`
  color: #213445;
  font-size: 40px;
`

const Subtitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 47px;
  font-weight: 300;
  color: #213445;
`

interface ImportWalletProps {}

export const ImportWallet: React.FC<ImportWalletProps> = () => {
  return (
    <div>
      <Top>
        <img src={SmallLogo} alt="logo" />
      </Top>

      <div className="p-32 w-10/12 flex flex-col mx-auto">
        <div>
          <MyTitle>IMPORT AN ACCOUNT WITH SEED PHRASE</MyTitle>
          <Subtitle>
            Enter your secret word phrase to restore your vault.
          </Subtitle>
        </div>

        <div className="mt-10">
          <form action="" className="text-gray-600 ">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Seed phrase
              </label>
              <input
                placeholder="Paste seed phase from clipboard"
                className="w-5/6 h-16 rounded-xl p-5 border-2 border-black text-black placeholder-gray-400"
                type="password"
              />
            </div>

            <div className="mt-10 flex align-baseline items-center">
              <input
                type="checkbox"
                name="seed"
                id="showseed"
                className="w-10 h-10"
              />
              <label htmlFor="" className="ml-2">
                Show seed phrase
              </label>
            </div>

            <div className="mt-10">
              <div className="flex w-full">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="" className="mb-2">
                    New password
                  </label>
                  <input
                    type="password"
                    placeholder="Paste seed phase from clipboard"
                    className="w-4/6 h-16 rounded-xl p-5 border-2 border-black text-black placeholder-gray-400"
                  />
                </div>

                <div className="flex flex-col w-1/2 ml-5">
                  <label htmlFor="" className="mb-2">
                    New password
                  </label>
                  <input
                    type="password"
                    placeholder="Paste seed phase from clipboard"
                    className="w-4/6 h-16 rounded-xl p-5 border-2 border-black text-black placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            <Button text="Import" className="mt-10" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ImportWallet
