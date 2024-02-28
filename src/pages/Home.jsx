import React, { useEffect, useState } from 'react'
import MemeCard from '../components/Card'
import { getAllMemes } from '../api/memes'

export default function HomePage() {
    const [memes,setMemes] = useState([])
    useEffect(()=>{
        getAllMemes().then(res=>{
            setMemes(res.data.memes)
        })
    },[])
  return (
    <div className='row'>
      {
        memes.map((meme)=>(
            <MemeCard img={meme.url} title={meme.name} key={meme.id} />
        ))
      }
    </div>
  )
}
