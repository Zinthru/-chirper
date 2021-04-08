import React from 'react';
import ChirpPost from '../ChirpPost';



const Chirp =({ todos })=> {
    return(
        <>
              <p>
              {todos.map((todo)=>(
                <ChirpPost text={todo.text}/>
                ))}
                
              </p>
          <p>
                
          </p>
        </>
    )
}

export default Chirp