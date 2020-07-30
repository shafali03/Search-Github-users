import React from 'react'
import Card from '../Card/Card'

const CardList = (props) => (
  <div id='container' className="mt-10">
    {props.cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
)

export default CardList