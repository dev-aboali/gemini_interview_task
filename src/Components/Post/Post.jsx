import React from 'react'
import Tilt from 'react-parallax-tilt';
import "./post.css"
function Post({ title, image}) {
    return (
        <Tilt>
            <div className="card">
                <div className="card__container">
                    <img src={image} alt={title} className="card__image"/>
                    <div className="card__title">{title}</div>
                </div>
        </div>
        </Tilt>
    )
}

export default Post
