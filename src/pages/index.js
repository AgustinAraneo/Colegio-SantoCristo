import Desktop from '../components/desktop/Desktop'
import Mobile from '../components/mobile/Mobile'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { FaSpinner } from 'react-icons/fa'


const Index = () => {
	const { isDesktop } = useIsDesktop()

	if (isDesktop) {
		return <Desktop />
	} else if (isDesktop === false) {
		return <Mobile />
	}
	return <p><FaSpinner size={50} color="grey" className='animate-spin'/></p>
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