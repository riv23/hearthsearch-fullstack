import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import potato from '../images/potato.svg'
import { Modal } from 'react-bootstrap'
import Login from '../login'
// import Logout from './logout'

export default class Nav extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			isLoggedIn: false,
			email: '',
			fireRedirect: null,
			checkedLoggedin: false,
			loginModal: false

		}
	}

	componentWillMount() {
		axios.get('/test')
		.then((response) => {
			this.setState({
				checkedLoggedin: true
			})
			if (response.data) {
				this.setState(() => {
					return {
						isLoggedIn: true,
						email: response.data.local.email
					}
				})
			}
		})
	}

	login = () => {
		console.log('login')
		this.setState({
			loginModal: true
		})
	}

    handleClose = () => {
        this.setState({
            loginModal: false
        })
    }

	renderClasses = (array) => {
		return array.map(item => {
			return (
				<li key={item}><Link to={`/Build/${item}`}>{item}</Link></li>			
			)
		})
	}
	

	render() {

		const classes = ["", "Warrior", "Druid", "Mage", "Hunter", "Priest", "Rogue", "Warlock", "Shaman", "Paladin"].sort()



		if (!this.state.checkedLoggedin) {
			return (
				<nav className="navbar navbar-inverse">
				</nav>
			)
		}

		if (this.state.isLoggedIn === true) {

			console.log('logged in')

			return (
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span> 
						</button>
						</div>
						<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="nav navbar-nav">
							<li className=""><Link to="/" className='nav-potato-inverted'>HearthTato</Link></li>
							<li className="dropdown">
								<a className="dropdown-toggle hvr-float" data-toggle="dropdown" href="#">Build
								<span className="caret"></span></a>
								<ul className="dropdown-menu">
									{this.renderClasses(classes)}
								</ul>
							</li>
							<li className="nav-item hvr-float"><Link to="/decks">Decks</Link></li>							
							<li className="nav-item hvr-float"><Link to="/import">Import</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							{/* <li className='hvr-float'><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li> */}
							{/* <li onClick={this.login} className='hvr-float'><a><span className="glyphicon glyphicon-log-in"></span> Login</a></li> */}
							<li className='hvr-float'><Link to='/logout'><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
						</ul>
						</div>
					</div>
				</nav>
            )
		} 
		
		else {
			return (
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span> 
						</button>
						</div>
						<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="nav navbar-nav">
							<li className=""><Link to="/" className='nav-potato-inverted'>HearthTato</Link></li>
							{/* <li><a href="#">Page 1</a></li>
							<li><a href="#">Page 2</a></li> 
							<li><a href="#">Page 3</a></li>  */}
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li className='hvr-float'><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
							<li onClick={this.login} className='hvr-float cursor'><a><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
						</ul>
						</div>
					</div>
					<Modal show={this.state.loginModal} onHide={this.handleClose}>
						<Login/>
					</Modal>
				</nav>
            )
		}   
	}    
}