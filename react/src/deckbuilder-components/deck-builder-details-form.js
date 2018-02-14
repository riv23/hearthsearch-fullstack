import React from 'react'
import Nav from '../nav-components/nav'
import axios from 'axios'
import _ from 'lodash'
import { Redirect } from 'react-router-dom';


export default class DeckBuilderDetails extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            deckName: '',
            decks: [],
            archetypes: [],
            description: '',
            redirectTo: null
        }
    }

    componentDidMount() {
        axios.get('/api/decks')
        .then((result) => {

            let archetypes = result.data.map(deck => {
                return deck.archetype
            })

            archetypes = _.uniq(archetypes)
            archetypes = archetypes.filter(archetype => {
                return archetype !== 'archetype'
            })

            console.log(archetypes)

            this.setState({
                decks: result.data,
                archetypes
            })
        })
        .then(() => {
            console.log(this.state.decks)
        })

        

    }

    handleChange = (event, name) => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()        

        axios.post(`/deck/update/${this.props.match.params.deckId}`, {
            archetype: this.state.archetype,
            description: this.state.description,
            name: this.state.deckName
        })
        .then(res => {
            console.log(res)
            this.setState({
                redirectTo: `/deck/${this.props.match.params.deckId}`
            })
        })
    }

    render() {
            const archetypes = this.state.archetypes.map(archetype => {
                return (
                    <option>
                        {archetype}
                    </option>
                )
            })

            if (this.state.redirectTo) {
                return <Redirect to={{ pathname: this.state.redirectTo }} />
            } 
        
        if (!this.state.redirectTo) {
            return (
                <div>
                    <Nav/>
                    <div className='form-group'>
                        <input onChange={(event) => {this.handleChange(event, 'deckName')}} name='deckName' className='form-control' placeholder='Deck Name' />
                    </div>
                    <select className="form-control" onChange={(event) => {this.handleChange(event, 'archetype')}}>
                        <option>Archetype</option>
                        <option>Aggressive Face</option>
                        <option>Aggressive Board Control</option>
                        <option>Midrange</option>
                        <option>Control</option>
                        <option>Miracle</option>                    
                        <option>One Turn Kill</option>
                        <option>Fatigue</option>
                        {archetypes}
                    </select>
                    <div className="form-group">
                        <textarea placeholder='Description' onChange={(event) => {this.handleChange(event, 'description')}} className="form-control" rows="5" id="comment"></textarea>
                    </div>
                    <button type="submit" classNameName="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                </div>
            )
        }

        

        
    }   
}