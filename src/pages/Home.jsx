import React,{useState}  from 'react'
import Data from "../helper/Data"
import TodoShow from '../components/TodoShow';

const Home = () => {

    const [doing,setDoing]=useState(Data);

  return (
    <div>
        <TodoShow doing={doing} setDoing={setDoing} />
    </div>
  )
}

export default Home