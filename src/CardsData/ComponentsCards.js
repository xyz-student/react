import React from 'react'

export default function ComponentsCards(props) {
    return (
        <div>
            <img src={props.cards_img} height={"auto"} width={'100%'} alt='abc' />
            <h1>{props.heading}</h1>
            <p>{props.para}</p>
        </div>
    )
}
