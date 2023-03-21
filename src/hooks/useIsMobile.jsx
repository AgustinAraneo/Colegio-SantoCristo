import { useState, useEffect } from 'react'

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(null)

	useEffect(() => {
		if (typeof window !== `undefined`) {
			import(`matchmedia-polyfill`)
				.then(() => {
					import(`matchmedia-polyfill/matchMedia.addListener`)
						.then(() => {
							const match = matchMedia(`(min-width: 360px)`)
							const changeState = (e) => {
								setIsMobile(e.matches)
							}

							match.addListener(changeState)
							console.log(`medidas`, screen.width, screen.height)
							setIsMobile(screen.width > 360)
							return () => {
								match.removeListener(changeState)
							}
						})
						.catch(err => {
							console.error(err)
						})
				})
		}
	}, [])

	return { isMobile }
}
