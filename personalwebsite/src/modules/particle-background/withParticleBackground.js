import React from 'react'
import Particles from 'react-particles-js'
import particleParams from './particle-params.json'
import { colours } from '../../utils/colours'

export const withParticleBackground = WrappedComponent => props => {
  const params = {
    ...particleParams,
    particles: { ...particleParams.particles, color: { value: '#0D5A78' } },
  }
  const particles = colours.map(colour => (
    <Particles
      params={{
        ...particleParams,
        particles: {
          ...particleParams.particles,
          color: { value: colour },
        },
      }}
      style={{ pointerEvents: 'none', position: 'absolute' }}
    />
  ))
  console.log(params)
  return (
    <div>
      {particles}
      <WrappedComponent {...props} />
    </div>
  )
}

export default withParticleBackground
