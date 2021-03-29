import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
	body {
		margin: 0;
		padding: 0;
		background: linear-gradient(#a2eae9, #27a5be);
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
	#root {
		font-family: 'Montserrat', sans-serif;
	}
	a{
		text-decoration: none;
	}
`

export default GlobalStyle
