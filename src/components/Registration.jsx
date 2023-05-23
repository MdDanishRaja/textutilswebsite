import React, {useState} from 'react'
import axios from 'axios'

const Registration = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false)

    const handleButtonClick = async () => {
        setloading(true)
        await axios.post('http://localhost:4000/register', {email, password}).then(res => console.log(res)).catch(err => console.log(err))
        setloading(false)
        setemail('')
        setpassword('')
    }


  return (
    <div className='m-4'>
      <input onChange={(e) => setemail(e.target.value)} className='p-2' type="text"  placeholder='email'/>
      <input onChange={(e) => setpassword(e.target.value)} className='p-2 m-2' type="text"  placeholder='password'/>
      <button onClick={handleButtonClick} className='p-2 m-2'>{loading?<p>Loading...</p>:<p>Submit</p>}</button>
    </div>
  )
}

export default Registration
