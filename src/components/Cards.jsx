import React from 'react'
import { Bookmark } from 'lucide-react';

function Cards(props) {
    return (
        <div className='card'>
            <div>
                <div className="top">
                    <img src={props.logo} alt="logo" />

                    <button>Save<Bookmark size={12} /> </button>
                </div>
                <div className="center">
                    <h3>{props.company} <span>{props.date}</span></h3>
                    <h4>{props.post}</h4>
                    <div>
                        <h5>{props.tagOne}</h5>
                        <h5>{props.tagTwo}</h5>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h5>{props.pay}</h5>
                    <span>{props.loca}</span>
                </div>
                <button>Apply now</button>
            </div>
        </div>
    )
}

export default Cards