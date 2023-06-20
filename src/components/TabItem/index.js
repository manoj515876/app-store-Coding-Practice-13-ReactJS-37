import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabDetails, upadateActiveTabId, isActive} = this.props
    const {tabId, displayText} = tabDetails

    const activeTabClassName = isActive ? 'active-tab-btn' : ''

    const onUpdate = () => {
      upadateActiveTabId(tabId)
    }

    return (
      <li className="tab-card">
        <button
          type="button"
          className={`tab-items ${activeTabClassName}`}
          onClick={onUpdate}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
