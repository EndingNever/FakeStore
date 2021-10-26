import React, { useContext, useRef } from 'react'
import { LoginContext } from '../contexts/LoginContext'

function Profile() {
    const input = useRef()
    const handleClick=()=>{
        setUsername(input.current.value)
    }
    const { username, setUsername } = useContext(LoginContext)
    // const {setUsername} = useContext(LoginContext)
    return (
        <>
            <h1> Profile </h1>
            <h2> Username: {username}</h2>
            <input
                type="text"
                placeholder="Username"
                ref={input}
            />
            <button onClick={() => {
                handleClick();
            }}
            >
                click
            </button>
            {/* <button onClick={setUsername("dingo")}>button</button> */}
        </>
    )
}

export default Profile
