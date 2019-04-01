import React from 'react'

import '../index.css'

import {
   Grid,
   Image,
} from 'semantic-ui-react'

import LogoFooterImage from '../images/near.svg'
import HelpFooterImage from '../images/need-help-footer.png'


const ResponsiveContainer = ({ children }) => (
   <Grid as='footer' columns={2}>
      <Grid.Column textAlign='left' verticalAlign='middle' computer={10} tablet={10} mobile={16} >
         <Image className='near-logo' src={LogoFooterImage} align='left'/>
         © 2019 NEAR Inc. All Rights Reserved.
      </Grid.Column>
      <Grid.Column only='tablet computer' computer={6} tablet={6} textAlign='right' className='help'>
         <Image 
            as='a' 
            href='http://near.chat/'
            target='_blank'
            className='help-image' 
            src={HelpFooterImage} 
            align='right' />
      </Grid.Column>
   </Grid>
)

export default ResponsiveContainer