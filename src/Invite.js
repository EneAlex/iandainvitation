import React, { useState } from 'react';
import Navbar from './NavigationBar';
import Section from './SectionInvite';
class Invite extends React.Component{
  
  constructor(props){
      super(props)
  }

  render() {
      return (
        <div className='maindiv'> 
            <Navbar/>
            <Section/>
        </div>
      );
    }
}

  export default Invite;