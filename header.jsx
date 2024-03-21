import "./header.css"
import { faBed, faCalendarDays, faPhotoVideo, faPlane, faPerson } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function header() {
    return (
        <div>
            <div className='header'>

              
                    <div className="head">
                        <h1 className="headerTitle">Tagline Of Hotel</h1>
                        <p className="haederDesc">
                            Description of tagline
                        </p>
                        <button className="headerbtn">Sign In/Register</button>
                       
                    </div>

        
            </div>
        </div>
    )
}
