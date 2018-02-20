import React from 'react'

export default function CardQuantity(props) {

    let quantity = props.deck.map(card => {
        if (card.name === props.name) {
            return card.quantity
        }
    })
    

    console.log(quantity)

    return (
        <div>{quantity}</div>
    ) 
}