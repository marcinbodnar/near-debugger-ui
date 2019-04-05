import React, { Component, Fragment } from 'react'

import { listBeaconBlocks } from '../../utils/api'

import {
   Container,
   Grid,
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

import TransactionRowMain from '../transactions/TransactionRowMain'
import DashboardRecentBlocks from './DashboardRecentBlocks'
import DashboardBlockElement from './DashboardBlockElement'
import DashboardRecentTransactions from './DashboardRecentTransactions'
import DashboardTop from './DashboardTop'


class DashboardDetail extends Component {
   state = {
      blocks: [],
      loader: true,

      transactionsX: new Array(10).fill({
         index: 1,
         showSub: false,
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

   componentDidMount() {
      listBeaconBlocks().then(response => {
         this.setState({
            blocks: response.data,
            loader: false,
         })
      }).catch((error) => {
         this.props.history.push({
            pathname: `/error`,
         })
      })
   }

   render() {
      const { blocks, loader, transactionsX, filterTypes } = this.state

      return (
         <Fragment>
            <Container>
               <Grid className='page-title'>
                  <Grid.Column as='h1'>Dashboard</Grid.Column>
               </Grid>

               <DashboardTop
                  blockHeight={blocks.length ? blocks[0].index : '-'}
                />
               <Grid columns={2} stackable className='recentTB'>
                  <Grid.Column computer={10}>
                     <DashboardRecentTransactions>
                        {transactionsX.map((transaction, i) => (
                           <TransactionRowMain
                              xkey={i}
                              key={i}
                              transaction={transaction}
                              i={i}
                              filterTypes={filterTypes}
                              type=''
                              dashboard={true}
                           />
                        ))}
                     </DashboardRecentTransactions>
                  </Grid.Column>
                  <Grid.Column computer={6}>
                     <DashboardRecentBlocks>
                        {blocks.map((block,i) => <DashboardBlockElement key={`b-${i}`} block={block} />)}
                     </DashboardRecentBlocks>
                  </Grid.Column>
               </Grid>
            </Container>
         </Fragment>
      )
   }
}

export default DashboardDetail