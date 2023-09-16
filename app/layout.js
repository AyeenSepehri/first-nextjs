import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './GlobalRedux/provider'
import ProductBox from './Components/maduleSection/MainCard/ProductBox'
import NavBar from './Components/NavBar/NavBar'
import localFont from 'next/font/local'

const myFont = localFont({ src: './IRANSans.woff2' })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html  lang="fa" dir='rtl'>
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        {/* <Providers>   */}
       <main className={myFont.className}>
       <NavBar/>
        {children}
       </main>
        {/* </Providers> */}
      </body>
    </html>
  )
}
