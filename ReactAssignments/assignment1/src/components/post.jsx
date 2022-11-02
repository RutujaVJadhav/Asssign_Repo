import React from 'react'

const post=(props)=>{
    const {posts} =props
    return(
    <div>
      <h1>Posts</h1>
      {posts.map((posts)=>
      {
        return(
          <div>
            
    <div> userId:{posts.userId}</div>
    <br/>
    <div> id:{posts.id}</div>
    <br/>
    <div> title:{posts.title}</div>
    <br/>
    <div> body:{posts.body}</div>
  

</div>
        )
      })}
   </div>   
      
      )
    }

export default post