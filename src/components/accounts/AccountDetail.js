import React, { Component, Fragment } from 'react'
import {
   withRouter,
} from 'react-router-dom'

import { getShardBlockByIndex, listBeaconBlocks } from '../../utils/api'

import {
   Container,
   Loader,
   Grid,
   Segment,
   Dimmer,
   Image,
   List,
} from 'semantic-ui-react'

import TransactionFilter from '../../images/icon-m-filter.svg'
import TransactionTypeAcct from '../../images/icon-t-acct.svg'
import TransactionTypeTransfer from '../../images/icon-t-transfer.svg'
import TransactionTypeCall from '../../images/icon-t-call.svg'
import TransactionTypeStake from '../../images/icon-t-stake.svg'
import TransactionTypeContract from '../../images/icon-t-contract.svg'
import TransactionTypeKeySwap from '../../images/icon-t-key-swap.svg'
import TransactionTypeKeyNew from '../../images/icon-t-key-new.svg'
import TransactionTypeKeyDelete from '../../images/icon-t-key-delete.svg'
import MTransactionsImage from '../../images/icon-m-transaction.svg'
import MHeldImage from '../../images/icon-m-held.svg'
import MCopyImage from '../../images/icon-m-copy.svg'
import MPowerImage from '../../images/icon-m-power.svg'
import TransarrowDownImage from '../../images/icon-transarrow-down.svg'
import TransarrowUpImage from '../../images/icon-transarrow-up.svg'
import PaginationBlock from '../pagination/PaginationBlock'
import TransactionRowMain from '../transactions/TransactionRowMain'

class AccountDetail extends Component {
   state = {
      loader: false,

      transactionsX: new Array(10).fill({
         index: 1,
         showSub: false,
         body: new Array(3).fill({
            index: 1,
            showSub: false,
            body: new Array(2).fill({
               index: 1,
               showSub: false,
               body: new Array(3).fill({
                  index: 1,
                  showSub: false,
               })
            })
         })
      }),

      filterTypes: [
         { img: TransactionFilter, name: 'ALL' },
         { img: TransactionTypeAcct, name: 'CREATE ACCOUNT' },
         { img: TransactionTypeTransfer, name: 'TRANSFER' },
         { img: TransactionTypeCall, name: 'FUNCTION CALL' },
         { img: TransactionTypeStake, name: 'STAKE' },
         { img: TransactionTypeContract, name: 'DEPLOY CONTRACT' },
         { img: TransactionTypeKeySwap, name: 'SWAP KEY' },
         { img: TransactionTypeKeyNew, name: 'ADD KEY' },
         { img: TransactionTypeKeyDelete, name: 'DELETE KEY' },
         // { img: TransactionTypeAcct, name: 'ADD BLS KEY' },
         { img: MTransactionsImage, name: 'UNKNOWN CALL' },
      ],
   }


   render() {
      const { loader, filterTypes, transactionsX } = this.state


      return (
         <Container>
            <Grid className='page-title'>
               <Grid.Column as='h1'>Account: <span className="color-black"> @alice.near</span></Grid.Column>
            </Grid>

            <Grid className='box block'>
               <Dimmer inverted active={loader}>
                  <Loader />
               </Dimmer>

               <Fragment>
                  <Grid.Row width={4} className='border-bottom'>
                     <Grid.Column computer={6} tablet={8} mobile={16} className='border-right'>
                        <h5><span className='balance-image'>Ⓝ </span>BALANCE</h5>
                        <List floated='left' horizontal>
                           <List.Item as='h2'>234,567<span className='balance-image-big'> Ⓝ</span></List.Item>
                           <List.Item as='h5'>(2,000,000 USD)</List.Item>
                        </List>
                     </Grid.Column>
                     <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
                        <Image src={MTransactionsImage} align='left' className='icon-tiny' />
                        <h5>TRANSACTIONS</h5>
                        <List floated='left' horizontal className='transactions-block'>
                           <List.Item><Image src={TransarrowDownImage} className='transarrow' /></List.Item>
                           <List.Item as='h2'>254</List.Item>
                           <List.Item><Image src={TransarrowUpImage} className='transarrow' /></List.Item>
                           <List.Item as='h2'>24</List.Item>
                        </List>
                     </Grid.Column>
                     <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
                        <Image src={MPowerImage} align='left' className='icon-tiny' />
                        <h5>POWER</h5>
                        <List floated='left' horizontal>
                           <List.Item as='h2'>50,000</List.Item>
                        </List>
                     </Grid.Column>
                     <Grid.Column computer={4} tablet={8} mobile={16}>
                        <Image src={MHeldImage} align='left' className='icon-tiny' />
                        <h5>NEAR HELD</h5>
                        <List floated='left' horizontal>
                           <List.Item as='h2'>50,000</List.Item>
                        </List>
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className='background-lg'>
                     <Grid.Column largeScreen={6} computer={5} tablet={8}>
                        <h5>CREATED</h5>
                        <h3>March 20, 2019 at 5:34:09pm</h3>
                     </Grid.Column>
                     <Grid.Column largeScreen={10} computer={11} tablet={8}>
                        <h5>ADDRESS</h5>
                        <List floated='left' horizontal>
                           <List.Item as='h3'>TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9</List.Item>
                           <List.Item ><Image src={MCopyImage} className='copy-image' /></List.Item>
                        </List>
                     </Grid.Column>
                  </Grid.Row>
               </Fragment>
            </Grid>

            <PaginationBlock
               filterTypes={filterTypes}
            >
               {transactionsX.map((transaction, i) => (
                  <TransactionRowMain
                     transaction={transaction}
                     i={i}
                     filterTypes={filterTypes}
                     type=''
                  />
               ))}
            </PaginationBlock>
         </Container>
      )
   }
}

export const AccountDetailWithRouter = withRouter(AccountDetail)