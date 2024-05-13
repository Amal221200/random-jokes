"use client"
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import JokeForm from './JokeForm'
import JokeOutput from './JokeOutput'

const JokeSection = () => {
    const [data, setData] = useState<string>("Enter a topic, and get a joke")
    const [loading, setLoading] = useState<boolean>(false)

    const handleJokes = useCallback(async(input: string )=> {
        setLoading(true)
        
        const res = await axios.get(`https://api.humorapi.com/jokes/create?topics=${input}&api-key=${process.env.NEXT_PUBLIC_JOKES_API_KEY}`);
        
        setData(res.data.joke)
        setLoading(false)
    }, [])

    return (
        <main className='w-[75%] space-y-2 sm:w-[45%]'>
            <JokeForm onSubmit={handleJokes} isLoading={loading} />
            <JokeOutput data={data} loading={loading} />
        </main>
    )
}

export default JokeSection