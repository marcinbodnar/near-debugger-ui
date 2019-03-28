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

const DashboardTop = ({children}) => (
   <Grid className='box block'>
      <Grid.Column computer={4} tablet={8} mobile={16} className='border-right'>
         <Image src={TransactionTypeCall} className='icon-tiny' />
         <h5>NODES ONLINE</h5>
         <h2>1162<span className='color-brown-grey'>/2356</span></h2>
      </Grid.Column>
      <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
         <Image src={MHeightImage} className='icon-tiny' />
         <h5>BLOCK HEIGHT</h5>
         <h2>6,083,793</h2>
      </Grid.Column>
      <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
         <Image src={MTpsImage} className='icon-tiny' />
         <h5>TPS/MAX</h5>
         <h2>27/748</h2>
      </Grid.Column>
      <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
         <Image src={MTransactionsImage} className='icon-tiny' />
         <h5>LAST DAY TX</h5>
         <h2>2,477,500</h2>
      </Grid.Column>
      <Grid.Column as={Link} to='/accounts' computer={3} tablet={8} mobile={16} className='dashboard-link'>
         <Image src={MUserImage} className='icon-tiny' />
         <h5>ACCOUNTS</h5>
         <h2>2,113,478</h2>
      </Grid.Column>
   </Grid>
)

export default DashboardTop