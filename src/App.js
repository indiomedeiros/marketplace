import React from 'react'
import { AppContainer } from './components/AppContainer'
import NavBar from  './components/NavBar'
import { CartItem } from './components/CartItem'

function App() {
	return (
		<div>
		<NavBar />	
        <AppContainer />
		<CartItem />
		</div>

	)
}

export default App
