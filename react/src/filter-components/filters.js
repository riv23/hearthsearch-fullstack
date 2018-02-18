import React from 'react'
import DropDown from './dropdown'


export default class Filters extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			hideFilter: false
		}
	}

	getFilter = (filterName, filterValue) => {
		this.props.getFilter(filterName, filterValue)
	}

	handleFilterChange = () => {
		if (this.state.hideFilter) {
			this.setState({
				hideFilter: false
			})
		}

		if (!this.state.hideFilter) {
			this.setState({
				hideFilter: true
			})
		}
	}

	showFilter = () => {


		const classes = ["Neutral", "Warrior", "Druid", "Mage", "Hunter", "Priest", "Rogue", "Warlock", "Shaman", "Paladin"].sort()
		const types = ["Minion", "Spell", "Weapon"].sort()
		const rarities = ["Free", "Common", "Rare", "Epic", "Legendary"]
		const cardSets = ["Basic","Blackrock Mountain","Classic","Goblins vs Gnomes","Hall of Fame","Journey to Un'Goro","Knights of the Frozen Throne","Kobolds & Catacombs","Mean Streets of Gadgetzan","Naxxramas","One Night in Karazhan", "The Grand Tournament","The League of Explorers","Whispers of the Old Gods"]
		const mana = ["0","1","2","3","4","5","6","7","8","9","10"]
		const attack = ["0","1","2","3","4","5","6","7","8","9","10"]
		const health = ["0","1","2","3","4","5","6","7","8","9","10",">10"]
		const gameFormats = ["Standard", "Wild"]
		const abilities = ["Charge", "Taunt", "Divine Shield", "Deathrattle", "Battlecry", "Silence", "Choose one", "Combo", "Adapt", "Discover", "Freeze", "Enrage", "Inspire", "Lifesteal", "Overload", "Windfury", "Poisonous", "Quest", "Stealth", "Draw", "Can't be targeted", "Discard"].sort()
		const tribe = ["Beast", "Demon", "Dragon", "Elemental", "Mech", "Murloc", "Pirate", "Totem"]
		const sorting = ["Name", "LightForge Score", "Mana"]
		const sortingMethods = ["Ascending", "Descending"]

		if (this.state.hideFilter) {
			return null
		} else {
			return (
				<div className=''>
						<div className='row'>
							<h4 className='text-center f-hdr-margin'>Sort By</h4>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Name</div> */}
								<DropDown filterName='Sort By'  filter='nameSort' onChange={this.getFilter}  options={sorting}/>
							</div>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Mana</div> */}
								<DropDown filterName='Sort Method' filter='sortingMethod' onChange={this.getFilter} options={sortingMethods} />
 							</div>
						</div>
						<hr/>
						<div className='row'>
							{!this.props.deckBuilder ? <div className='col-sm-12 '>
								{/* <div className='filter-header'>Class</div> */}
								<h4 className='text-center filters-container-header'>Filters</h4>
								<DropDown filterName='Class' filter='hero' onChange={this.getFilter}  options={classes}/>
							</div> : null}
							
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Card Type</div> */}
								<DropDown filterName='Type' filter='type' onChange={this.getFilter}  options={types}/>
							</div>


							{!this.props.imported ? <div className='col-sm-12 '>
								{/* <div className='filter-header'>Class</div> */}
								<DropDown filterName='Game Format' filter='gameFormat' onChange={this.getFilter}  options={gameFormats}/>
							</div> : null}

							{/* <div className='col-sm-12'>
								<div className='filter-header'>Game Format</div>
								<DropDown filterName='Game Format' filter='gameFormat' onChange={this.getFilter} options={gameFormats} />
 							</div> */}



							<div className='col-sm-12'>
								{/* <div className='filter-header'>Rarity</div> */}
								<DropDown filterName='Rarity' filter='rarity' onChange={this.getFilter}  options={rarities}/>
							</div>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Card Set</div> */}
								<DropDown filterName='Card Set' filter='cardSet' onChange={this.getFilter} options={cardSets}/>
							</div>
						</div>
						<hr/>
						<div className='row second-row'>
 							<div className='col-sm-12'>
								{/* <div className='filter-header'>Ability</div> */}
								<DropDown filterName='Ability' filter='ability' onChange={this.getFilter} options={abilities} />
 							</div>
 							<div className='col-sm-12'>
								{/* <div className='filter-header'>Ability 2</div> */}
								<DropDown filterName='Second Ability' filter='ability2' onChange={this.getFilter} options={abilities} />
 							</div>
 							<div className='col-sm-12'>
								{/* <div cfilterName='' lassName='filter-header'>Tribe</div> */}
								<DropDown filterName='Tribe' filter='tribe' onChange={this.getFilter} options={tribe} />
 							</div>
							 <div className='col-sm-12'>
								{/* <div className='filter-header'>Mana</div> */}
								<DropDown filterName='Mana' filter='mana' onChange={this.getFilter} options={mana}/>
							</div>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Attack</div> */}
								<DropDown filterName='Attack' filter='attack' onChange={this.getFilter} options={attack}/>
							</div>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Health</div> */}
								<DropDown filterName='Health' filter='health' onChange={this.getFilter} options={health}/>
							</div>
						</div>
						<hr/>
						<div className='row third-row'>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Min Mana</div> */}
								<DropDown filterName='Minimum Mana' filter='minMana' onChange={this.getFilter} options={mana}/>
							</div>
							
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Max Mana</div> */}
								<DropDown filterName='Maximum Mana' filter='maxMana' onChange={this.getFilter} options={mana}/>
							</div>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Min Attack</div> */}
								<DropDown filterName='Minimum Attack' filter='minAttack' onChange={this.getFilter} options={mana}/>
							</div>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Max Attack</div> */}
								<DropDown filterName='Maximum Attack' filter='maxAttack' onChange={this.getFilter} options={mana}/>
							</div>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Min Health</div> */}
								<DropDown filterName='Minimum Health' filter='minHealth' onChange={this.getFilter} options={mana}/>
							</div>
							<div className='col-sm-12'>
								{/* <div className='filter-header'>Max Health</div> */}
								<DropDown filterName='Maximum Health' filter='maxHealth' onChange={this.getFilter} options={mana}/>
							</div>
						</div>
					</div>
			)
		}
	}


	render() {

		return (
			<div>
				<div className='panel panel-default'>
					<div className='panel-heading filter-panel-heading'>
						<div className='filter-heading-cntr'>
							<div className='filters-hdr'>
								Filters
							</div>
							<div className='hide-filter'>
								<label><input type="checkbox" onChange={this.handleFilterChange} value="" /></label>
							</div>
						</div>
					</div>
					<div className='panel-body'>
						{this.showFilter()}
					</div>
				</div>
			</div>
		)	
	}
	
	
}