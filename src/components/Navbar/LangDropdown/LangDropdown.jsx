import { useState } from 'react'
import styles from './langdropdown.modules.css'

const LangDropdown = () => {
  const [] =useState(false)
  return (
    <div className='lang'>
        <img src="./images/flag.png" alt="" />
       
      <div className="drpdwn">
        <select name="" id="">
          <option value=""><strong>EN</strong></option>
          <option value=""><strong>EN</strong></option>
          <option value=""><strong>EN</strong></option>
          <option value=""><strong>EN</strong></option>
          <option value=""><strong>EN</strong></option>
        </select>
      </div>
    </div>
  )
}

export default LangDropdown