import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home/Home"
import ImportWallet from "./pages/ImportWallet/ImportWallet"
import New from "./pages/New/New"

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/new" component={New} />
      <Route path="/import-wallet" component={ImportWallet} />
    </Switch>
  )
}

export default App
