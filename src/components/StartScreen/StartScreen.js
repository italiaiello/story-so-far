import React, { useState } from 'react'

const StartScreen = ({ onRouteChange }) => {

    const password = "eggFace"
    const [isValid, setIsValid] = useState(true)
    const [passwordEntered, setPasswordEntered] = useState('')


    const onPasswordChange = (e) => {
        if (!isValid) {
            setIsValid(true)
        }
        setPasswordEntered(e.target.value)
    }

    const onPasswordSubmit = (e) => {
        e.preventDefault()
        if (passwordEntered === password) {
            setIsValid(true)
            onRouteChange('home')
        } else {
            setIsValid(false)
        }
    }

    const onEnterPress = (e) => {
        if (e.code === 'Enter') {
            if (passwordEntered === password) {
                setIsValid(true)
                onRouteChange('home')
            } else {
                setIsValid(false)
            }
        }
    }

    return (
        <section id="startScreen">
            <h2>Secret Message</h2>
            <h3>Enter the password to unlock it</h3>
            <form onSubmit={onPasswordSubmit} onKeyPress={onEnterPress}>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" placeholder="Enter password..." onKeyPress={onEnterPress} onChange={onPasswordChange} />
                <button onClick={onPasswordSubmit}>Submit</button>
            </form>
            <p className={isValid ? 'hide' : 'errorMessage show'}>That password is incorrect</p>
        </section>
    )
}

export default StartScreen