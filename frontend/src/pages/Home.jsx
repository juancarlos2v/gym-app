import Banner from "@components/home/Banner"
import About from "@components/home/About"
import Form from "@components/home/Form"
import Class from "@components/home/Class"
import FAQ from "@components/home/FAQ"
import Patners from "@components/home/Patners"
import Footer from "@components/home/Footer"
import Nav from "@components/home/Nav"

const Home = () => {
    return (
        <>
            <title>GYMOVE</title>
            <Nav />
            <Banner />
            <About />
            <Form />
            <Class />
            <FAQ />
            <Patners />
            <Footer />
        </>
    )
}


export default Home
