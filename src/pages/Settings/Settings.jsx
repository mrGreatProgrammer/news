import React from 'react';
import Input from '../../components/ui/Input/Input';
import './Settings.css';


const Settings = () => {
  return (
    <div className="settings">
        <div className="setting__account">
          <div className="change__name">
            <div className="chande__first_name">
              <Input placeholder={'Change first name'} inpType={'text'} />
            </div>
            <div className="change__second_name">
              <Input placeholder="Change second name" inpType='text' />
            </div>
          </div>
          <div className="change__user_type">
            
          </div>
        </div>
    </div>
  )
}

export default Settings