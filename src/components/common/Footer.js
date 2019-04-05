import React from 'react'

// import '../index.css'

import {
   Grid,
   Image,
} from 'semantic-ui-react'

import LogoFooterImage from '../../images/near.svg'
import HelpFooterImage from '../../images/need-help-footer.png'


import styled from 'styled-components'

const FooterGrid = styled(Grid)`
   position: absolute;
   bottom: 0px;
   width: 100%;

   height: 100px;
   background-color: #f8f8f8;

   font-size: 12px;
   font-weight: 300;
   line-height: 40px;
   color: #999999;

   .near-logo {
      margin: 0 20px 0 20px;
   }
   &&& .help {
      padding: 0px;

      .help-image {
         margin-top: -24px;
         margin-right: -1rem;
      }
   }
   
`


const ResponsiveContainer = ({ children }) => (
   <FooterGrid columns={2}>
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
   </FooterGrid>
)

export default ResponsiveContainer