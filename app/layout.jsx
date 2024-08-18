import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';

export const metadata = {
    title: "NextApp",
    description: "Discover and share AI prompts"
}

const Rootlayout = ({children}) => {
    return (
        <html lang = "en">
            <body>
            <div className="flex flex-col h-screen">
                <Provider>

                    <div className="main">
                        <div className="gradient"/>
                    </div>

                    <main className="app">
                        <Nav/>
                        {children}
                    </main>
                </Provider>
                <div className="mt-auto">
                    <Footer/>
                </div>
            </div>
            </body>

        </html>

    )
}

export default Rootlayout