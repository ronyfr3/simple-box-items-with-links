import React from 'react'
import {Link} from 'react-router-dom'
// import {FaBars} from 'react-icons/fa'
import {BiArrowBack} from 'react-icons/bi'

import {ToggleData} from './ToggleData'
import {CarData} from './CarData'
import './ToggleSlide.css'

function ToggleSlide() {
    const forwardOption=()=>{
      console.log('none')
    }
    const backOption=()=>{
      console.log('none')
    }
    
    return (
        <div className="topDiv">
        <form className="divData">
                    
                        <div className="toggleData">
                                <div className='text_forwardIcon'>
                                    <p className='text'> Hey, Buddy</p>
                                    <span className='XIcon'> X </span>
                                </div>

                        <hr className="hrTag"/>

         {ToggleData.map((item,i)=>{
                      return(
                                <Link className="data_link">
                                    <li key={i} className={item.className} id='toggleList'>{item.title}</li>
                                    <span className="forward_icon" onclick={forwardOption}>{item.icon}</span>
                                </Link>
                     )})}

               </div>
             </form>

                <form className="right_form">
                        <div className='second_div'>

                                <Link className='second_link'>
                                    <span className="back_Arrow" onclick={backOption}><BiArrowBack className="backSign"/></span>
                                    <span className='back_span'>Back</span>
                                </Link>

                        <hr className='SecondHr'/>

             {CarData.map((item,i)=>{
                        return(
                            <Link className="data_link">
                                <li key={i} className={item.className} id='toggleList'>{item.title}</li>
                            </Link>
                     )})}
                     
                </div>

            </form>
        </div>
        
        
    )
}

export default ToggleSlide
