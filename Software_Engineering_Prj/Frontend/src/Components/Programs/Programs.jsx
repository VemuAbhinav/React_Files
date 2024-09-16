import React from 'react'
import './Programs.css'
import program_1 from '../../assets/safeimagekit-electricity.png'
import program_2 from '../../assets/safeimagekit-Water.png'
import program_3 from '../../assets/safeimagekit-waste.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import {Link} from "react-router-dom"

const Programs = () => {
  return (
    <div>
        <div className="programs">
            
        <Link to='/Electricity'><div className="program">
                    <img src={program_1} alt="" />
                        <div className="caption">
                            <img src={program_icon_1} alt="" />
                            <p>Electricity</p>
                        </div>
                </div></Link>
            
            <Link><div className="program">
                <img src={program_2} alt="" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Water</p>
                </div>
            </div></Link>
            <Link><div className="program">
                <img src={program_3} alt="" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>Waste</p>
                </div>
            </div></Link>
        </div>
    </div>
  )
}

export default Programs