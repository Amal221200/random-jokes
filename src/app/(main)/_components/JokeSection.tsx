"use client"

import axios from 'axios'
import React, { useCallback, useState } from 'react'
import JokeForm from './JokeForm'
import JokeOutput from './JokeOutput'

const JokeSection = () => {
    const [data, setData] = useState<string>("Select a category and get a joke")
    const [loading, setLoading] = useState<boolean>(false)

    const handleJokes = useCallback(async(input: string )=> {
        setLoading(true)
        const res = await axios.get(`https://api.humorapi.com/jokes/create?topics=${input}&api-key=${process.env.JOKES_API_KEY}`);
        
        setData(res.data.joke)
        setLoading(false)
    }, [])

    return (
        <main className='space-y-2'>
            <JokeForm onSubmit={handleJokes} />

            <JokeOutput data={data} loading={loading} />
        </main>
    )
}

export default JokeSection