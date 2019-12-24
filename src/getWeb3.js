import Web3 from "web3";
import IN3Client from 'in3';
import WasmIN3Client from 'in3-wasm';

import InterceptAndLog from "./InterceptAndLog.js";

export const useWasm = true;


const getWeb3 = (withVerification) =>
  new Promise((resolve, reject) => {
    // If withVerification In3 client will be used as a provider for Web3.
    if (withVerification) {
      const in3Config = {
        proof: 'standard',  //‘none’ for no verification, ‘standard’ for verifying all important fields, ‘full’ veryfying all fields even if this means a high payloaad 
        signatureCount: 2,
        requestCount: 3,
        chainId: 'mainnet',
        timeout: 30000,
        replaceLatestBlock: 6
      };

      try {
        let client;
        if (!window.web3WithIn3) {
          if (useWasm) {
            WasmIN3Client.setTransport(new InterceptAndLog().in3WasmTransportFunction)

            client = new WasmIN3Client(in3Config)
          }
          else {
            client = new IN3Client(in3Config);
          }

          // use the IN3Client as Http-Provider
          const web3 = new Web3(client);
          window.web3WithIn3 = web3;
        }

        console.log("Web3 with In3 (Incubed will be used as a provider for Web3)");
        resolve(window.web3WithIn3);
      } catch (error) {
        reject(error);
      }
    }
    else {
      console.log("Web3 without In3 client will be used. There is no way to verify the respose of the remote node (ethereum client).");
      // Wait for loading completion to avoid race conditions with web3 injection timing.
      window.addEventListener("load", async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            resolve(web3);
          } catch (error) {
            reject(error);
          }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
          // Use Mist/MetaMask's provider.
          const web3 = window.web3;
          console.log("Injected web3 detected.");
          resolve(web3);
        }
        // Fallback to localhost; use dev console port by default...
        else {
          const provider = new Web3.providers.HttpProvider(
            "http://127.0.0.1:8545"
          );

          const web3 = new Web3(provider);

          console.log("No web3 instance injected, using Local web3.");
          resolve(web3);
        }
      });
    }
  });

export default getWeb3;
