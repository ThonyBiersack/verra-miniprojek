import React from 'react'
import { Link } from 'react-router-dom';
import Button from "../../components/Button"

const Home = () => {
  return (
    <div className='flex flex-col items-center text-4xl font-bold text-center'>
            Rumah Sakit Sejahtera
            <div className='flex flex-col item-center'>
                <Link to="/list-user"><Button>Patient</Button></Link>
            </div>
            
    </div>
  
    )
  
}

export default Home;