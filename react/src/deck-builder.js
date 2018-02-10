import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import axios from 'axios'
import _ from 'lodash'
// import HearthstoneJSON from "hearthstonejson";

import Searchbar from './searchbar'
import CardList from './card-components/card-list'
import Filters from './filter-components/filters'
import Banner from './banner'
import DeckBuilderList from './deckbuilder-components/deck-builder-list'
// import DeckBuilderHeader from './deckbuilder-components/deck-builder-header'
import Nav from './nav-components/nav'

class App extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			filterOn: true,
			hero: '',
			type: '',
			rarity: '',
			cardSet: '',
			minMana: '',
			maxMana: '',
			minAttack: '',
			maxAttack: '',
			minHealth: '',
			maxHealth: '',
			ability: '',
			ability2: '',
			tribe: '',
			card: '',
			deckBuilder: true
		}

		this.getHero = this.getHero.bind(this);
		this.getType = this.getType.bind(this);
		this.getRarity = this.getRarity.bind(this);
		this.getCardSet = this.getCardSet.bind(this);
		this.getMana = this.getMana.bind(this);
		this.getAttack = this.getAttack.bind(this);
		this.getHealth = this.getHealth.bind(this);
		this.getMinMana = this.getMinMana.bind(this);
		this.getMaxMana = this.getMaxMana.bind(this);
		this.getMinAttack = this.getMinAttack.bind(this);
		this.getMaxAttack = this.getMaxAttack.bind(this);
		this.getMinHealth = this.getMinHealth.bind(this);
		this.getMaxHealth = this.getMaxHealth.bind(this);
		this.getGameFormat = this.getGameFormat.bind(this);
		this.getAbility = this.getAbility.bind(this);
		this.getAbility2 = this.getAbility2.bind(this);
		this.getTribe = this.getTribe.bind(this);
		this.getCard = this.getCard.bind(this);

		this.getFilter = this.getFilter.bind(this)
	}

	getFilter(filterName, filter) {
		this.setState({
			filterName: filter
		})
	}

	getTerm(term) {
		this.setState({term})
	}

	getHero(hero) {
		this.setState({hero})
	}

	getType(type) {
		this.setState({type})
	}

	getRarity(rarity) {
		this.setState({rarity})
	}

	getCardSet(cardSet) {
		this.setState({cardSet})
	}

	getMana(mana) {
		this.setState({mana})
	}

	getAttack(attack) {
		this.setState({attack})
	}

	getHealth(health) {
		this.setState({health})
	}

	getMinMana(minMana) {
		this.setState({minMana})
	}

	getMaxMana(maxMana) {
		this.setState({maxMana})
	}

	getMinAttack(minAttack) {
		this.setState({minAttack})
	}

	getMaxAttack(maxAttack) {
		this.setState({maxAttack})
	}

	getMinHealth(minHealth) {
		this.setState({minHealth})
	}

	getMaxHealth(maxHealth) {
		this.setState({maxHealth})
	}

	getGameFormat(gameFormat) {
		this.setState({gameFormat})
	}
	
	getAbility(ability) {
		this.setState({ability})
	}

	getAbility2(ability2) {
		this.setState({ability2})
	}

	getTribe(tribe) {
		this.setState({tribe})
	}

	getCard(card) {

		this.setState(() => {
			return {card: card}
		})
	}

	componentWillMount() {
		axios({
			method:'get',
			url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards',
			headers: {"X-Mashape-Key": "BhtFx5NH0bmshlnQj9CkNKDDWrrjp1gr6JXjsnJ81pEtaCDfHV"}
		}).then(data => {

			this.setState({cards: data.data});
			console.log(data);
		})

		// axios({
		// 	method:'get',
		// 	url: 'https://api.hearthstonejson.com/v1/22611/enUS/cards.collectible.json',
		// }).then(data2 => {
		// 	console.log('hsjon', data2);
		// })	
	}

	render() {

		const cardSearch = _.debounce((term) => {
			this.getTerm(term) }, 300)
		 

		return (
		<div>
			<Nav />
		<div className='deck-builder-container'>
			<Banner />
			<div>{this.props.match.params.class}</div>
			<div className='row'>
					<div className='col-lg-1 col-md-2 col-xs-12'>
					{this.state.filterOn ? 
						<Filters 
							getHero={this.getHero} 
							getType={this.getType} 
							getRarity={this.getRarity}
							getCardSet={this.getCardSet}
							getMana={this.getMana}
							getAttack={this.getAttack}
							getHealth={this.getHealth}
							getMinMana={this.getMinMana}
							getMaxMana={this.getMaxMana}
							getMinAttack={this.getMinAttack}
							getMaxAttack={this.getMaxAttack}
							getMinHealth={this.getMinHealth}
							getMaxHealth={this.getMaxHealth}
							getGameFormat={this.getGameFormat}
							getAbility = {this.getAbility}
							getAbility2 = {this.getAbility2}
							getTribe = {this.getTribe}
							deckBuilder = {true}
						/> : 
						<div />}
					</div>
				<div className='col-lg-10 col-md-9 col-xs-12'>
					<Searchbar onSearch={cardSearch}/>
					
					<CardList 
						cards={this.state.cards} 
						term={this.state.term} 
						rarity={this.state.rarity}
						cardSet={this.state.cardSet}
						mana={this.state.mana}
						attack={this.state.attack}
						health={this.state.health}
						minMana={this.state.minMana}
						maxMana={this.state.maxMana}
						minHealth={this.state.minHealth}
						maxHealth={this.state.maxHealth}
						minAttack={this.state.minAttack}
						maxAttack={this.state.maxAttack}
						gameFormat={this.state.gameFormat}
						ability={this.state.ability}
						ability2={this.state.ability2}
						tribe={this.state.tribe}
						getCard = {this.getCard}
						hero={this.props.match.params.class}
						buildMode={true}        
					/>
				</div>
				<div className='col-lg-1 col-md-1 col-xs-12'>
					<div className=''>
						<DeckBuilderList card={this.state.card}/>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
	}
}

export default App