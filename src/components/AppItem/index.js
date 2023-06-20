import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appDetails} = this.props
    const {appName, imageUrl} = appDetails
    return (
      <li className="app-card">
        <img src={imageUrl} alt={appName} className="app-image" />
        <p className="app-name"> {appName}</p>
      </li>
    )
  }
}

export default AppItem
