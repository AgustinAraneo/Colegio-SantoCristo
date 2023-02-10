import Desktop from '../components/desktop/Desktop'
import Mobile from '../components/mobile/Mobile'
import { useIsDesktop } from '../hooks/useIsDesktop'


const Index = () => {
	const { isDesktop } = useIsDesktop()

	if (isDesktop) {
		return <Desktop />
	} else if (isDesktop === false) {
		return <Mobile />
	}
	return <p>Loading</p>
}

export default Index





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import '../index.css';


// let Index;
// if (window.navigator.userAgent.match(/Mobile/)) {
//   Index = require('../containers/mobile-index').default;
// } else {
//   Index = require('../containers/desktop-index').default;
// }

// const root = document.getElementById('root');
// ReactDOM.createRoot(root).render(<Index />);