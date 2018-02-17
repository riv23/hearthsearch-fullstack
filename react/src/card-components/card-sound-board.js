import React from 'react'
import sounds from './card-sounds-by-id'

export default function(props) {

    var result = []

    for (var key in sounds) {
        // console.log(typeof key);
        if (key === props.cardId) {
            result.push(sounds[key]);
        }
    }

    function playIntroSound() {

        if (result[0].play.length > 1) {

            {
                let tag = result[0].play[0].name
                let url = `http://media-hearth.cursecdn.com/audio/card-sounds/sound/${tag}.ogg`
                let audio = new Audio(url);
                audio.play();            
            }
    
            {
                let tag = result[0].play[1].name
                let url = `http://media-hearth.cursecdn.com/audio/card-sounds/sound/${tag}.ogg`
                let audio = new Audio(url);
                audio.play();    
            }
        }

        if (result[0].play.length === 1) {
            let tag = result[0].play[0].name
            let url = `http://media-hearth.cursecdn.com/audio/card-sounds/sound/${tag}.ogg`
            let audio = new Audio(url);
            audio.play();
        }

    }

    function playAttackSound() {
        let tag = result[0].attack[0].name
        let url = `http://media-hearth.cursecdn.com/audio/card-sounds/sound/${tag}.ogg`
        let audio = new Audio(url);
        audio.play()
    }

    function playDeathSound() {
        let tag = result[0].death[0].name
        let url = `http://media-hearth.cursecdn.com/audio/card-sounds/sound/${tag}.ogg`
        let audio = new Audio(url);
        audio.play()
    }

    return (

        <div className='row snd-margin-left'>
            <div className='col-xs-4 center-block'>
                <div onClick={playAttackSound}>
                    <button className='btn'><i className="fas fa-play"></i> Attack</button>
                </div>
            </div>
            <div className='col-xs-4 center-block'>                        
                <div onClick={playIntroSound}>
                    <button className='btn margin-left-sbrd'><i className="fas fa-play"></i> Intro</button>
                </div>
            </div>
            <div className='col-xs-4 center-block'>                        
                <div onClick={playDeathSound} >
                    <button className='btn'><i className="fas fa-play"></i> Death</button>
                </div>
            </div>                       
        </div>
    )
}