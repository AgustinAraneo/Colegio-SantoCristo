import React from 'react'
import Lottie from 'react-lottie'
import animation from "../../education.json"

const educationCv = {
	loop: true,
	autoplay: true,
	animationData: animation,
	rendererSettings: {
		preserveAspectRatio: ``
	}
}

const Animacion = () => {
  return (
    <div>
        <h1 className=" font-Montserrat font-bold text-xl text-green-900 uppercase text-center">Más de 60 años brindando educación de primera...</h1>
      <div style={{ width: '70%', margin: '0 auto', marginTop: '' }}>
        <Lottie options={educationCv} isClickToPauseDisabled ariaRole="img" />
        </div>
    </div>
  )
}

export default Animacion