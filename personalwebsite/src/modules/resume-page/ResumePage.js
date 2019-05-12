import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import resumeFile from '../../images/Shane-Schmaltz-Resume.pdf'

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
    const { file, numPages } = this.state

    return (
      <div className="Example">
        <div className="Example__container">
          <div className="Example__container__document">
            <Document file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
    )
  }
}

ResumePage.propTypes = {}

export default ResumePage
