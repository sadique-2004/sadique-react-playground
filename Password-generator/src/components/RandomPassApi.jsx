import React, { useState, useEffect } from 'react'

const RandomPassApi = () => {
    let [password, setPassword] = useState({});
    const url = 'https://api.genratr.com/?length=16&uppercase&lowercase&special&numbers';

    const getPassword = async () => {
        let responce = await fetch(url)
        let JsonData = await responce.json()
        console.log(JsonData.password)
        setPassword({ password: JsonData.password })
    }

    useEffect(() => {
        const getFirstPassword = async () => {
            let responce = await fetch(url)
            let JsonData = await responce.json()
            console.log(JsonData.password)
            setPassword({ password: JsonData.password })
        }
        getFirstPassword()
    }, [])

    
    return (
        <div className='flex flex-col items-center justify-center mt-0 mb-8'>
            <h1 className='text-2xl font-bold text-center'>Get strong Password suggection</h1>
            <div className='w-full max-w-md  shadow-lg rounded-xl px-6 py-6 my-10 bg-gray-800 text-white m-auto'>
                <p className='text-center'>{password.password}</p>

            </div>
            <button onClick={getPassword} className='border rounded px-4 py-2  bg-amber-500 hover:bg-amber-700 cursor-pointer hover:text-white'>Get password</button>
        </div>
    )
}

export default RandomPassApi