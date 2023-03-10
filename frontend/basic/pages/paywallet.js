import { StrictMode } from "react";
// import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React, { Component } from "react";

import App from "./App";

class paywallet extends Component {
    state = {};
    render() {

      return <StrictMode>
              <ChakraProvider>
                <Web3ReactProvider getLibrary={getLibrary}>
                  <App />
                </Web3ReactProvider>
              </ChakraProvider>
            </StrictMode>;
    }
  }
  
  export default paywallet;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(
  // <StrictMode>
  //   <ChakraProvider>
  //     <Web3ReactProvider getLibrary={getLibrary}>
  //       <App />
  //     </Web3ReactProvider>
  //   </ChakraProvider>
  // </StrictMode>,
//   rootElement
// );