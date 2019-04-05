import React, { Component, Fragment } from 'react'
import {
   Link,
} from 'react-router-dom'

import { listBeaconBlocks } from '../../utils/api'

import {
   Button,
   Grid,
   Image,
   Header,
} from 'semantic-ui-react'


import BlocksImage from '../../images/icon-blocks.svg'

import styled from 'styled-components'

const RecentCustomGrid = styled(Grid)`
   .main-row-last {
      padding: 0 0 14px 24px;
      margin-left: 20px;
      border-left: 4px solid #e6e6e6;
   }

   .row:last-child {
      padding: 0px;
   }

   && .dashboard-recent-blocks {
      margin: 0 0 0 20px;
      padding-top: 0;
   }

   .dashboard-header {
      padding: 0px 0 10px 0 !important;
   }
`


const DashboardRecentBlocks = ({ children }) => (
   <RecentCustomGrid className='dashboard-list' stackable columns={2}>
      <Grid.Row>
         <Grid.Column className='dashboard-header' textAlign='left' width={16}>
            <Header as={Link} to='/beacon-chain' className='h2'>
               <Image className="column-icon" src={BlocksImage} />
               Recent Blocks
            </Header>
         </Grid.Column>
      </Grid.Row>
      <Grid.Row className='border-left-bold dashboard-recent-blocks'>
         {children}
      </Grid.Row>
      <Grid.Row>
         <Grid.Column className='main-row-last' textAlign='left' width={16}>
            <Button
               as={Link}
               to='/beacon-chain'
               className='view-all'>
               VIEW ALL
            </Button>
         </Grid.Column>
      </Grid.Row>
   </RecentCustomGrid>
)

export default DashboardRecentBlocks