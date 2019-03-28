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

const DashboardBlockElement = ({ block }) => (
   <Grid.Column textAlign='left' width={8} style={{ margin: '0px', padding: '0px 0 0 10px' }}>
      <Grid as={Link} to={`/beacon-block/${block.index}`} columns={1} stackable className='block-b'>
         <Grid.Row>
            <Grid.Column className='h3'>
               #{block.index}
            </Grid.Column>
            <Grid.Column className='color-brown-grey' style={{ paddingTop: '8px' }}>
               <Image src={MHeightImage} className='icon-tiny' style={{ margin: '2px 6px 0 0' }} />
               254
            </Grid.Column>
            <Grid.Column className='color-brown-grey'>
               <Image src={MTransactionsImage} className='icon-tiny' style={{ margin: '2px 6px 0 0' }} />
               15489
            </Grid.Column>
            <Grid.Column className='color-brown-grey'>
               <Image src={MUserImage} className='icon-tiny' style={{ margin: '2px 6px 0 0' }} />
               @vlad.near
            </Grid.Column>
            <Grid.Column computer={9} tablet={16} style={{ paddingTop: '10px', paddingRight: '0px' }}>
               <span className='color-blue' style={{ fontWeight: '700' }}>
                  69a3a68...
               </span>
            </Grid.Column>
            <Grid.Column className='color-brown-grey' textAlign='right' computer={7} tablet={16} style={{ paddingTop: '10px', fontSize: '12px' }}>
               1h ago
            </Grid.Column>
         </Grid.Row>
      </Grid>
   </Grid.Column>
)

export default DashboardBlockElement