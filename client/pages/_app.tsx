import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [name, setName] = useState('')

  return <Component {...pageProps} name={name} setName={setName}/>
}

export default MyApp
