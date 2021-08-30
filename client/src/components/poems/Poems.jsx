import React from 'react'
import { Poem } from '../poem/Poem'
import './Poems.css'

export const Poems = ({poems}) => {
    return (
        <div className="poems">
        {poems.map((poem) => (
            <Poem key={poem._id} poemTitle={poem.title} poemText={poem.text} poemDate={poem.date} />
        ))}
    </div>
    )
}
