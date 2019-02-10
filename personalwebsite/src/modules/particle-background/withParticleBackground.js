import React from 'react'
import Particles from 'react-particles-js'
import particleParams from './particle-params.json'

export const withParticleBackground = WrappedComponent => props => {
  const params = {
    ...particleParams,
    particles: { ...particleParams.particles, color: { value: '#0D5A78' } },
  }
  console.log(params)
  return (
    <div>
      <Particles
        params={params}
        style={{ pointerEvents: 'none', position: 'absolute' }}
      />
      <Particles
        params={{
          ...particleParams,
          particles: {
            ...particleParams.particles,
            color: { value: '#8B0915' },
          },
        }}
        style={{ pointerEvents: 'none', position: 'absolute' }}
      />
      <Particles
        params={{
          ...particleParams,
          particles: {
            ...particleParams.particles,
            color: { value: '#BD1659' },
          },
        }}
        style={{ pointerEvents: 'none', position: 'absolute' }}
      />
      <Particles
        params={{
          ...particleParams,
          particles: {
            ...particleParams.particles,
            color: { value: '#620A4D' },
          },
        }}
        style={{ pointerEvents: 'none', position: 'absolute' }}
      />
      <Particles
        params={{
          ...particleParams,
          particles: {
            ...particleParams.particles,
            color: { value: '#4E7010' },
          },
        }}
        style={{ pointerEvents: 'none', position: 'absolute' }}
      />
      <WrappedComponent {...props} />
    </div>
  )
}

export default withParticleBackground
