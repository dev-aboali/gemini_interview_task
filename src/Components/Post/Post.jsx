import React from 'react'
import Tilt from 'react-parallax-tilt';
import "./post.css"
function Post({ title, image, id }) {
    return (
        <Tilt>
            <div className="card">
                <div className="card__container">
                    {console.log(id)}
                    { id > 8 ?  (
                        <>
                            <div className="line line1"></div>
                            <Tilt className="line line2">
                            </Tilt>
                        </>
                    ): null}
                    <img src={image} alt={title} className="card__image"/>
                    <div className="card__title">{title}</div>
                </div>
            </div>
        </Tilt>
    )
}

export default Post
