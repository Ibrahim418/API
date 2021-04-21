import React, { useState,useEffect } from 'react'
import axios from 'axios' ;


const UserList = () => {
    const [user, setUser] = useState()
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>setUser(res.data))
    }, [])
    return (
        <div>
            <ul>{user && true? user.map(e=><li> {e.name}</li>): null}</ul>
        </div>
    )
}

export default UserList
