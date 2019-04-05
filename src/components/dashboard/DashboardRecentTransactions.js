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

import TransactionsImage from '../../images/icon-transactions.svg'

import styled from 'styled-components'

const RecentCustomGrid = styled(Grid)`
  .main-row-last {
      padding: 14px 0 14px 24px;
      margin-left: 20px;
      border-left: 4px solid #e6e6e6;
   }
   
   .col-image {
      margin-left: -33px;
      flex: 0 0 40px;
   }

   .row:last-child {
      padding: 0px;
   }

   .dashboard-header {
      padding: 0px 0 10px 0 !important;
   }
`


const DashboardRecentTransactions = ({children}) => (
   <RecentCustomGrid className='dashboard-list'>
      <Grid.Row>
         <Grid.Column className='dashboard-header' textAlign='left' width={16}>
            <Header as={Link} to='/transactions' className='h2'>
               <Image className="column-icon" src={TransactionsImage} />
               Recent Transactions
            </Header>
         </Grid.Column>
      </Grid.Row>
      {children}
      <Grid.Row>
         <Grid.Column className='main-row-last' textAlign='left' width={16}>
            <Button
               as={Link}
               to='/transactions'
               className='view-all'>
               VIEW ALL
            </Button>
         </Grid.Column>
      </Grid.Row>
   </RecentCustomGrid>
)

export default DashboardRecentTransactions