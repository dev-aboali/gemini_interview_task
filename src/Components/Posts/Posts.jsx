import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import Post from '../Post/Post'
import "./posts.css"
function Posts() {
    let [posts, setPosts] = useState([])
    let [perPage, setPerPage] = useState(9)
    let [skip, setSkip] = useState(0)
   
    useEffect(() => {
         fetch(`https://interview-api.blockgemini.dev/posts/?skip=${skip}&limit=${perPage}`)
        .then(res => res.json())
        .then(data => {
            setPosts([...posts,...data.data])
        })
    }, [skip, perPage])
 
   
    const addMorePosts = () => {
        setSkip(perPage)  
        setPerPage(perPage => perPage + perPage)
    }
   
    return (
        
        <>
            <div className="posts animate__animated animate__fadeInRight">
                {posts?.map((post, i) => (
                        <motion.div
                            initial={{ opacity: 0, translateY: '50vh' }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="post"
                        >
                            <Post title={post.title} key={post.id} image={post.image} />
                        </motion.div>
                ))}

                
            </div>
            {posts.length > 0 && (
                <div className="load__more">
                    <button className="load__more--btn" onClick={addMorePosts}>Load More...</button>
                </div>
            )}
        </>
    )
}

export default Posts
