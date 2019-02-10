import React from 'react'
import Particles from 'react-particles-js'
import particleParams from './particle-params.json'

export const withParticleBackground = WrappedComponent => props => {
  return (
    <div>
      <Particles params={particleParams} style={{ position: 'absolute' }} />
      <WrappedComponent {...props} />
    </div>
  )
}

export default withParticleBackground
