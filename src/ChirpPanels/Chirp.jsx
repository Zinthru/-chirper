import {useState} from 'react';
import ChirpPanels from './ChirpPanels';


const Chirp =()=> {
    const [status,setStatus]=useState([
        {
            status: 'HELLO WORLD'
        }
    ]);

const poop = newItem => setStatus([...status,newItem]);

    return(
        <>
          {/* <ChirpPanels list={status}/> */}
          <h4>
              Hello World!
          </h4>
          <p>Time Posted: **
          </p>
        </>
    )
}

export default Chirp