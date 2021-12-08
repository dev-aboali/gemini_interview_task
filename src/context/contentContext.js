import React, { useState } from 'react'
export const contentContext = React.createContext()

export function ContentContextProvider(props) {
    const [content, setContent] = useState('posts')

    return (
        <contentContext.Provider value={{content, setContent}}>
            {props.children}
        </contentContext.Provider>
    )
}

export default contentContext
