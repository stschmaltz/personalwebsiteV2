import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import resumeFile from '../../images/Shane-Schmaltz-Resume.pdf'
import './ResumePage.css'
import sizeMe from 'react-sizeme'
import PageTitle from '../../components/PageTitle/PageTitle'

const DownloadButton = () => (
  <div className="resume-page_title-container">
    <span className="resume-page_title-description">
      Below is my resume. It details my work experience and my familiarity with
      different technologies and programming langauges.
    </span>
    <a
      className="resume-page_download-button"
      href="../../images/Shane-Schmaltz-Resume.pdf"
      download="Shane-Schmaltz-Resume.pdf"
    >
      Download
    </a>
  </div>
)

class ResumePage extends Component {
  state = {
    file: resumeFile,
    numPages: null,
  }

  onFileChange = event => {
    this.setState({
      file: event.target.files[0],
    })
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { size } = this.props
    const { width } = size

    const { file, numPages } = this.state

    const resumeWidth = Math.min(width * 1.05, 1000)
    const realResumeWidth = Math.max(resumeWidth, 500)
    return (
      <div className="resume-page_main-container">
        <PageTitle
          className="resume-page_page-title"
          title="Resume"
          ContentComponent={DownloadButton}
        />
        <div className="resume-page_resume-container">
          <Document
            renderMode="svg"
            className="resume-page_resume-document"
            file={file}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                width={realResumeWidth}
                className="resume-page_resume-page"
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        </div>
      </div>
    )
  }
}

ResumePage.propTypes = {}

export default sizeMe()(ResumePage)
