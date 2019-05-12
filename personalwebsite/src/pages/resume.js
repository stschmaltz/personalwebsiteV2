import React from 'react'
import Layout from '../components/layout'
import withParticleBackground from '../modules/particle-background/withParticleBackground'
import ResumePageContent from '../modules/resume-page/ResumePage'

const ResumePage = () => {
  return (
    <Layout>
      <ResumePageContent />
    </Layout>
  )
}

export default withParticleBackground(ResumePage)
