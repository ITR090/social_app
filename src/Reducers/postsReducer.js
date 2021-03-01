const postsReducersState = {
    posts:[
            // {id:'1',
            //  title:'C#',
            //  body:'You can use c# in many ways',
            //  files:'',
            //  photo:'',
            //  user_id:'u1'
            //  },
            //  {id:'1',
            //  title:'C#',
            //  body:'You can use c# in many ways',
            //  files:'',
            //  photo:'',
            //  user_id:'u1'
            //  },
    ],
}


const postReducer = (state = postsReducersState, action) =>{
    if(action.type ==='CREATE_POST'){
        return{
            ...state,
            posts:state.posts.concat(action.data)
        }
    }
    if(action.type === 'SHOW_POSTS'){
        console.log(action.data)
        return{
            ...state,
            posts: action.data 
        }
    }
    return state;
}


export default postReducer;