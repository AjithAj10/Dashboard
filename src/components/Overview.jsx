import { Button } from '@mui/material'
import React from 'react'
import Card from './card/Card'
import { cardsData } from "./data/data";

const Overview = () => {
  
  return (
    <div className='overview'>
        <div className="title">
            <div className="header">Overview</div>
            <Button className='overview-btn' variant='contained'  >weekly</Button>
        </div>
        <div className="allCards">
        {
            cardsData.map(card => {
                return <Card data={card}/>
            })
        }
        </div>
    </div>
  )
}

export default Overview