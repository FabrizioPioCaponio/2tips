import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';
import Logo from '@components/Logo'


export const metadata = {
    title: "2tips",
    description: "Scopri nuovi consigli e condividine i tuoi!"
}

const RootLayout = ({children}) => {
  return (
    <html lang='it'>
        <body>
          <Provider>
          <div className='main '>
                <div className=''/>
            </div>
            <main className='app'>
              <Nav/>
              <Logo/>
              {children} 
            </main>
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout