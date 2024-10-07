import React,{useState}  from 'react'
import Data from "../helper/Data"
import TodoShow from '../components/TodoShow';
import TodoAdd from '../components/TodoAdd';

const Home = () => {

    const [doing,setDoing]=useState(Data);

  return (
    <div>
        <TodoAdd doing={doing} setDoing={setDoing}/>
        <TodoShow doing={doing} setDoing={setDoing} />
    </div>
  )
}

export default Home