import React from 'react';
import {BarChart} from 'react-easy-chart';
import DeckAverageMana from './deck-average-mana'

export default function DeckManaChart(props) {

    // {
    //     oneCostCards: 2,
    //     twoCostCards: 1,
    //     threeCostCards: 0
    // }

    console.log('hi', props)


    var curve = []

    for (let i=0; i<props.deck.length; i++) {
        if (props.deck[i].quantity === 1) {

            curve.push(props.deck[i].mana || props.deck[i].cost || 0)
        } 

        if (props.deck[i].quantity === 2) {
            curve.push(props.deck[i].mana || props.deck[i].cost || 0)
            curve.push(props.deck[i].mana || props.deck[i].cost || 0)
        }
    }


    var average = curve.reduce((a, b) => {
        return a + b 
    }, 0)


    var zeroMana = curve.filter(index => {
        return index === 0
    })

    var oneMana = curve.filter(index => {
        return index === 1
    })

    var twoMana = curve.filter(index => {
        return index === 2
    })
    
    var threeMana = curve.filter(index => {
        return index === 3
    })
    
    var fourMana = curve.filter(index => {
        return index === 4
    })

    var fiveMana = curve.filter(index => {
        return index === 5
    })

    var sixMana = curve.filter(index => {
        return index === 6
    })

    var sevenMana = curve.filter(index => {
        return index === 7
    })

    var eightMana = curve.filter(index => {
        return index === 8
    })
    
    var nineMana = curve.filter(index => {
        return index === 9
    })

    var tenMana = curve.filter(index => {
        return index === 10
    })

    var tenManaPlus = curve.filter(index => {
        return index >= 11
    })
  
            return (
                <div className='bar-chart-container'>
                    <div class='curve-panel-header'>
                        <DeckAverageMana curve={average/curve.length || 0} />
                    </div>
                    <BarChart
                        colorBars
                        margin={{top: 10, right: 10, bottom: 0, left: 10}}
                        // barWidth={20}
                        width={167}
                        height={80}
                        // xType={'linear'}
                        data = {[
                            {x: 0, y: zeroMana.length},
                            {x: 1, y: oneMana.length},
                            {x: 2, y: twoMana.length},
                            {x: 3, y: threeMana.length},
                            {x: 4, y: fourMana.length},
                            {x: 5, y: fiveMana.length},
                            {x: 6, y: sixMana.length},
                            {x: 7, y: sevenMana.length},
                            {x: 8, y: eightMana.length},
                            {x: 9, y: nineMana.length},
                            {x: 10, y: tenMana.length + tenManaPlus.length},
                        ]}
                    />
                    <div className='x-axis'>
                        0 1 2 3 4 5 6 7 8 9 <span className='mana-10-chart'>10</span>
                    </div>
                </div>
            )   
    
}