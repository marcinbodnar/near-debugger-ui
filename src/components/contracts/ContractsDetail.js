import React, { Component } from 'react'
import {
   withRouter,
} from 'react-router-dom'

import { getShardBlockByIndex } from '../../utils/api'

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

import PaginationBlock from '../pagination/PaginationBlock'
import TransactionRowMain from '../transactions/TransactionRowMain'


class ContractsDetail extends Component {
   state = {
      transactions: [{
         body: {
            amount: null,
            contract_id: '',
            method_name: '',
            originator: '',
         },
         hash: '',
      }],
      loader: true,

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
         { img: MTransactionsImage, name: 'UNKNOWN CALL' },
      ],
   }

   updateBlock(blockIndex) {
      // this.setState({
      //    loader: true,
      //    block: {
      //       NumTransactionsIndex: 0,
      //    }
      // })
      // getShardBlockByIndex(blockIndex).then(response => {
      //    this.setState(() => ({
      //       block: {
      //          index: response.index,
      //          hash: response.hash,
      //          parentHash: response.parent_hash,
      //          transactions: response.transactions,
      //          NumTransactionsIndex: response.transactions.length,
      //       },
      //       loader: false,
      //    }))
      // }).catch((error) => {
      //    console.log(error)
      //    // this.props.history.push({
      //    //   pathname: `/error`,
      //    // })
      // })

      this.setState({
         transactions: new Array(this.state.pageLimit).fill({
            body: {
               amount: 110,
               contract_id: "studio-zquz2vpza",
               method_name: "addMeme",
               originator: "devuser1548977304363",
            },
            hash: "8NNohBQZDim5V4T6trRhNThL5zLhvt9YaEa3oeKcsx5f",
         }),
         numPages: 10,
         loader: false,
      })
   }

   componentDidMount() {
      this.updateBlock(this.props.match.params.blockIndex)
   }

   /* ASK */
   componentDidUpdate(prevProps) {
      if (prevProps.match.params.blockIndex !== this.props.match.params.blockIndex) {
         this.updateBlock(this.props.match.params.blockIndex)
      }
   }

   render() {
      const { transactions, transactionsX, filterTypes } = this.state

      return (
         <Container>
            <Grid columns={2} className='page-title'>
               <Grid.Column as='h1'>Contracts</Grid.Column>
               <Grid.Column as='h1' textAlign='right' className='color-black'>2,113,478<span className="color-brown-grey"> total</span></Grid.Column>
            </Grid>
            
            <PaginationBlock 
               filterTypes={filterTypes}
               type={5}
            >
               {transactionsX.map((transaction, i) => (
                  <TransactionRowMain
                     key={i}
                     xkey={i}
                     transaction={transaction}
                     i={i}
                     filterTypes={filterTypes}
                     type={5}
                  />
               ))}
            </PaginationBlock>
         </Container>
      )
   }
}

export const ContractsDetailWithRouter = withRouter(ContractsDetail)