import React from 'react'
import './Poem.css'

export const Poem = ({poemTitle, poemDate, poemText}) => {
    return (
        <section className="poem">
          <h3>{poemTitle}</h3>
          <span>{poemDate}</span>
          <div>{poemText}</div>
        </section>
    )
}