import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
      return (
          <div>
            <ul className="right">
                <li><NavLink to='/report'>Report</NavLink></li>
                <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Log Out</NavLink></li>
            </ul>
          </div>
      )   
}

export default SignedInLinks;