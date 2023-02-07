import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Bannar = (props) => {
    return(
        <section className="bannar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>{props.title}</h2>
                        <li>
                            <Link>
                                <FontAwesomeIcon calss="span" icon={faHome} /> <span>Home</span>  
                            </Link>
                            / {props.smtitle}
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bannar;