import React from 'react';
import {connect} from 'react-redux';
import {CREATE_POST,SHOW_POSTS} from '../Actions/postactions';
class Posts extends React.Component{

    state={
        postTitle:'',
        postBody:'',
    }
    posTitletHandler =(e)=>{
        this.setState({
            postTitle : e.target.value
        })
    }
    postBodyHandler = (e)=>{
        this.setState({
            postBody:e.target.value
        })
    }
    sendPost= (event)=>{
        event.preventDefault()
       let title = this.state.postTitle
       let body = this.state.postBody
       let user_id='u1'
       const post = {
           title:title,
           body:body,
           user_id:user_id
       }
       this.props.CREATE_POST(post)
    }
    componentDidMount(){
        console.log(this.props.SHOW_POSTS())
    }
    render(){
        return(
        <div className='container-fluid'>
            <button type="button" className="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModal">Create Post</button>
            {/* create post */}
             <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <form className='p-3'>
                         <div className='form-group'>
                           <label>Title</label>
                             <input type="text" name='title' onChange={this.posTitletHandler} className="form-control"/> 
                         </div>
                        
                         <div className='form-group'>
                             <label>body</label>
                             <textarea className='form-control' name='body' rows='3' onChange={this.postBodyHandler}>
                             </textarea>
                         </div>
                         <div className='form-group'>
                             <label>file</label>
                             <input type='file' className='form-control' name='file' />
                         </div>
                         <div className='form-group'>
                            <button type="submit" onClick={this.sendPost} className="btn btn-primary" data-dismiss="modal">Send</button>
                         </div>
                      </form>
                  </div>
                 </div>
             </div>
             {/* show posts (my posts and people i followed) */}
            <div className="container mt-4">
                {this.props.showPosts.map((post)=>{
                    return(
                <div className='p-4'>
                      <div className='card' id={post.id}>
                        <div className='card-header d-flex justify-content-between'>
                            <a href='#' className='nav-link'>{post.title}</a>
                            <a href='#' className='nav-link'><h6>{post.user_id}</h6></a>
                        </div>
                        <div className='card-body'>
                            {post.body}
                        </div>
                        <div className='card-footer'>
                           <a href='#'><i class="far fa-heart fa-lg me-2" style={{color:'red'}}></i></a>
                           <a href='#'><i class="far fa-comment fa-lg me-2" style={{color:'black'}}></i></a>
                        </div>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
        )
        
    }
}
const mapStateToProps=(state)=>{
    return{
        showPosts : state.postReducer.posts,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        CREATE_POST : (post)=> {dispatch(CREATE_POST(post))},
        SHOW_POSTS : () => { dispatch(SHOW_POSTS())}
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts);