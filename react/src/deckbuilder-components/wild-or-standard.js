import React from 'react'
import wild from '../images/wild.svg'
import standard from '../images/standard.svg'
import ReactFitText from 'react-fittext'

export default function WildOrStandard(props) {

    const handleClick = (event) => {

        props.getFormat(event.target.name)
    }

    return (
        <div className='wild-or-standard-cntr'>
            <div className='format-header'>
            </div>
            <div class='row'>
                <div class='col-xs-12 col-sm-6 icon-cntr animated fadeIn'>
                    <ReactFitText>
                        <h3 className='text-center'>Standard</h3>
                    </ReactFitText>
                    <div className='standard center-block'>
                        <img name="standard" onClick={handleClick} className='format-icon hvr-fade' src={standard} />
                    </div>
                </div>

                <div class='col-xs-12 col-sm-6 icon-cntr'>
                    <ReactFitText>
                        <h3 className='text-center'>Wild</h3>
                    </ReactFitText>
                    <div className='wild center-block'>
                        <img name="wild" onClick={handleClick} className='format-icon hvr-fade' src={wild} />
                    </div>
                </div>
            </div>
        </div>
    )
}