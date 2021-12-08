import React from 'react'
import "./addPost.css"

function AddPost() {
    return (
        <div className="addPost">
            <div className="form__group">
                <input id="title" type="text" placeholder="Enter Title" />    
                <label htmlFor="title">Title</label>
            </div>
            <div className="form__group">
                <input id="image" type="text" placeholder="Enter Image Url" />    
                <label htmlFor="image">Image Url</label>
            </div>

            <button className="btn">Submit</button>

        </div>
    )
}

export default AddPost
