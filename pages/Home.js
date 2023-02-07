import React from "react";
import headerImg from "../assets/home_page1.png"
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faSquare } from '@fortawesome/free-solid-svg-icons'
import pls from '../assets/pls.png'

const Home =()=>{
    return(
        <header>
            <header className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-7">
                        <h5>
                            We Provide All Health Care Solution
                        </h5>
                        <h2>
                            Protect Your Health And Take Care To Of Your Health
                        </h2>
                        <button>
                            <a href="#readMore">read more</a>
                        </button>
                        <FontAwesomeIcon className="iqon_sq" icon={faSquare} />
                        <img className="pls" src={pls} />
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className="headerBox">
                            <img src={headerImg} alt="img" />
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                    </div>
                </div>
            </header>
        </header>
    )
}

export default Home;