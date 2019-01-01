import React, {Component} from 'react'
import './footer.css'

class Footer extends Component {
  render() {
    return(
      <footer className='page-footer'>
        <div className='container'>
        </div>
        <div className="footer-copyright blue accent-2">
            <div className="container">
            © 2019 Weather by Q
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer