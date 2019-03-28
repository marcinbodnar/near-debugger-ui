import React, { Component, Fragment } from 'react'
import {
   Link,
} from 'react-router-dom'

import { listBeaconBlocks } from '../utils/api'

import '../index.css'

import {
   Button,
   Container,
   Grid,
   Image,
   Segment,
   Header,
   List,
} from 'semantic-ui-react'

import MHeightImage from '../images/icon-m-height.svg'
import MTpsImage from '../images/icon-m-tps.svg'
import MUserImage from '../images/icon-m-user.svg'

import TransactionsImage from '../images/icon-transactions.svg'
import TransactionFilter from '../images/icon-m-filter.svg'
import ArrowDown from '../images/icon-arrow-down.svg'
import ArrowRight from '../images/icon-arrow-right.svg'
import TransactionTypeAcct from '../images/icon-t-acct.svg'
import TransactionTypeTransfer from '../images/icon-t-transfer.svg'
import TransactionTypeCall from '../images/icon-t-call.svg'
import TransactionTypeStake from '../images/icon-t-stake.svg'
import TransactionTypeContract from '../images/icon-t-contract.svg'
import TransactionTypeKeySwap from '../images/icon-t-key-swap.svg'
import TransactionTypeKeyNew from '../images/icon-t-key-new.svg'
import TransactionTypeKeyDelete from '../images/icon-t-key-delete.svg'
import MTransactionsImage from '../images/icon-m-transaction.svg'

import BlocksImage from '../images/icon-blocks.svg'

import BlocksList from './BlocksList'
import TransactionRowMain from './TransactionRowMain'

const DashboardRecentTransactions = ({children}) => (
   <Grid className='dashboard-list'>
      <Grid.Row>
         <Grid.Column className='dashboard-header' textAlign='left' width={16}>
            <Header as={Link} to='/transactions' className='h2 link-color'>
               <Image className="column-icon" src={TransactionsImage} />
               Recent Transactions
            </Header>
         </Grid.Column>
      </Grid.Row>
      {children}
      <Grid.Row style={{ padding: '0 0 0 0' }}>
         <Grid.Column className='main-row-last' textAlign='left' width={16}>
            <Button
               as={Link}
               to='/transactions'
               className='view-all'>
               VIEW ALL
            </Button>
         </Grid.Column>
      </Grid.Row>
   </Grid>
)

export default DashboardRecentTransactions