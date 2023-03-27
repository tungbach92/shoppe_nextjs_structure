import '@src/styles/globals.css'
import type {AppProps} from 'next/app'
import {axiosConfigs} from "@src/configs/axios";

axiosConfigs();

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
