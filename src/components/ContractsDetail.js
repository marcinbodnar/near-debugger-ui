import React, { Component } from 'react'
import {
   withRouter,
} from 'react-router-dom'

import { getShardBlockByIndex } from '../utils/api'

import '../index.css'

import {
   Container,
   Loader,
   List,
   Header,
   Grid,
} from 'semantic-ui-react'

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

import BlockDetail from './BlockDetail'
// import TransactionsListNew from './TransactionsListNew'
import PaginationBlock from './PaginationBlock'
import TransactionRowMain from './TransactionRowMain'


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
         { img: TransactionTypeAcct, name: 'ADD BLS KEY' },
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
            <Grid columns={2} className='no-padding-y'>
               <Grid.Column style={{paddingBottom: '0px'}}>
                  <h1 className="color-charcoal-grey">Contracts</h1>   
               </Grid.Column>
               <Grid.Column style={{paddingBottom: '0px'}} textAlign='right'>
                  <h1 className="color-black">
                     2,113,478
                     <span className="color-brown-grey"> total</span>
                  </h1>
               </Grid.Column>
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