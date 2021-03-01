import posts from "../Components/posts"



export const SHOW_POSTS= ()=>{
   
   return dispatch =>{
    fetch('https://social-app-5a3e8-default-rtdb.firebaseio.com/posts.json')
       .then(res =>res.json())
       .then(posts =>{
          const postss = Object.entries(posts).map(post => post[1])
        dispatch({
            type:'SHOW_POSTS',
            data:postss
        })
       }) 

    
   }
}
export const CREATE_POST = (post)=>{
    return dispatch =>{
     fetch('https://social-app-5a3e8-default-rtdb.firebaseio.com/posts.json',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(post)
        }).then(res =>res.json())
          .then(newPost => {
            post.id = newPost.name
            dispatch({
                type:'CREATE_POST',
                data:post
               })
        })

    }
}
