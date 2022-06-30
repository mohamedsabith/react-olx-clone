import React,{createContext, useState} from 'react'

export const PostContext = createContext(null)

function Post ({children}){

    const [post,setPost] = useState()

    return(
        <PostContext.Provider value={{post,setPost}}>
            {children}
        </PostContext.Provider>
    )
}

export default Post