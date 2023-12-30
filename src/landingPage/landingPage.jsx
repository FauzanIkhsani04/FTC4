import { Fragment } from "react";
import Navbar from "../component/navbar"
import './style.css'
import Footer from '../component/footer'
import AboutCard from '../component/aboutCard'
import VM from '../component/visiMisi'
import SC from './card/strukturCard'
const landingPage = () => {
    return (
        <Fragment>
            <Navbar />
            <AboutCard />
            <VM />
            <div className="page1">
                <div className="con2">
                    <div className="k2">
                        <h1 className="boxKPH">
                            KPH HMIT 2023
                        </h1>

                    </div>

                </div>


            </div>
            <SC />
            <div id="struktur1">

                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img src="/struktur.svg" alt="" id="struktur" />
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default landingPage;