import Header from "../header/header.component"
import Footer from "../footer/Footer"

export const Layout = ({ children }) => {
    return (
       <>
            <Header />
            {children}
            <Footer/>
       </>
    )
}