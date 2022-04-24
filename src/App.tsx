import "./App.css";
import { useState } from "react";
import { WEB3AUTH_NETWORK_TYPE } from "./config/web3AuthNetwork";
import { CHAIN_CONFIG_TYPE } from "./config/chainConfig";
import styles from "./styles/Home.module.css";
import { Web3AuthProvider } from "./services/web3auth";
// import Setting from "./components/Setting";

import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [web3AuthNetwork, setWeb3AuthNetwork] =
    useState<WEB3AUTH_NETWORK_TYPE>("testnet");
  const [chainC, setChain] = useState<CHAIN_CONFIG_TYPE>("polygon");

  return (
    <div className={styles.container}>
        <Web3AuthProvider chain={chainC} web3AuthNetwork={web3AuthNetwork}>
            {/* <Setting setNetwork={setWeb3AuthNetwork} setChain={setChain} /> */}
            <div> <h2 style={{textAlign: "center"}}>Review Protocol</h2> </div>
            <Main />
          </Web3AuthProvider>
    </div>
  );
}

export default App;
