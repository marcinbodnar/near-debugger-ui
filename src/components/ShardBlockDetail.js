import React, { Component, Fragment } from 'react'
import {
   withRouter,
   Link,
} from 'react-router-dom'

import { getShardBlockByIndex } from '../utils/api'

import '../index.css'

import MHeightImage from '../images/icon-m-height.svg'
import MTpsImage from '../images/icon-m-tps.svg'
import MUserImage from '../images/icon-m-user.svg'

import TransactionsImage from '../images/icon-transactions.svg'
import TransactionFilter from '../images/icon-m-filter.svg'
import ArrowDown from '../images/icon-arrow-down.svg'
import ArrowUp from '../images/icon-arrow-up.svg'
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
import MHeldImage from '../images/icon-m-held.svg'
import MCopyImage from '../images/icon-m-copy.svg'
import MSizeImage from '../images/icon-m-size.svg'

import {
   Container,
   Loader,
   List,
   Grid,
   Image,
   Dimmer,
} from 'semantic-ui-react'

import BlockDetail from './BlockDetail'
import TransactionsList from './TransactionsList'

import PaginationBlock from './PaginationBlock'
import TransactionRowMain from './TransactionRowMain'


class ShardBlockDetail extends Component {
   state = {
      block: {
         index: null,
         hash: '',
         parentHash: '',
         transactions: [],
         NumTransactionsIndex: 0,
      },
      loader: true,

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
      this.setState({
         loader: true,
         block: {
            NumTransactionsIndex: 0,
         }
      })
      getShardBlockByIndex(blockIndex).then(response => {
         this.setState(() => ({
            block: {
               index: response.index,
               hash: response.hash,
               parentHash: response.parent_hash,
               transactions: response.transactions,
               NumTransactionsIndex: response.transactions.length,
            },
            loader: false,
         }))
      }).catch((error) => {
         console.log(error)
         // this.props.history.push({
         //   pathname: `/error`,
         // })
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
      const { block, loader, filterTypes } = this.state
      const { index, hash, parentHash, transactions, NumTransactionsIndex } = block

      return (
         <Container>
            <h1><span className="color-charcoal-grey">Shard Block</span> #{index}</h1>

            



            <Grid className='box block'>
               <Dimmer inverted active={loader}>
                  <Loader />
               </Dimmer>
               <Fragment>
                  <Grid.Row width={4} className='border-bottom'>
                     <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
                        <Image src={MHeightImage} align='left' className='icon-tiny' />
                        <h5>HEIGHT</h5>
                        <h2>
                           234,567
                        </h2>
                     </Grid.Column>
                     <Grid.Column computer={4} tablet={8} mobile={16} className='border-right'>
                        <Image src={MTransactionsImage} align='left' className='icon-tiny' />
                        <h5>TRANSACTIONS</h5>
                        <h2>
                           {NumTransactionsIndex}
                        </h2>
                     </Grid.Column>
                     <Grid.Column computer={4} tablet={8} mobile={16} className='border-right'>
                        <Image src={MSizeImage} align='left' className='icon-tiny' />
                        <h5>SIZE</h5>
                        <h2>
                           26,544 Bytes
                        </h2>
                     </Grid.Column>
                     <Grid.Column computer={5} tablet={8} mobile={16}>
                        <Image src={MUserImage} align='left' className='icon-tiny' />
                        <h5>WITNESS</h5>
                        <h3 className='color-blue'>
                           @vlad.near
                        </h3>
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className=''>
                     <Grid.Column computer={6} tablet={8}>
                        <h5>CREATED</h5>
                        <h3>
                           March 20, 2019 at 5:34:09pm
                        </h3>
                     </Grid.Column>
                     <Grid.Column computer={10} tablet={8}>
                        <h5>ADDRESS</h5>
                        <div style={{ display: 'flex' }}>
                           <div>
                              <h3>{hash}</h3>
                           </div>
                           <div>
                              <Image src={MCopyImage} align='' style={{ width: '18px', margin: '2px 10px 0 10px' }} />
                           </div>
                        </div>
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className='background-lg'>
                     <Grid.Column computer={16} tablet={16}>
                        <h5>PARENT HASH</h5>
                        <div style={{ display: 'flex' }}>
                           <div>
                              <Link
                                 to={`/shard-block/${index - 1}`}
                                 className='h3 color-seafoam-blue'
                              >
                                 {parentHash}
                              </Link>
                           </div>
                           <div>
                              <Image src={MCopyImage} align='' style={{ width: '18px', margin: '2px 10px 0 10px' }} />
                           </div>
                        </div>
                     </Grid.Column>
                  </Grid.Row>
               </Fragment>
            </Grid>


            <PaginationBlock
               filterTypes={filterTypes}
            >
               {NumTransactionsIndex !== 0 && transactions.map((transaction, i) => (
                  <TransactionRowMain
                     xkey={i}
                     key={i}
                     transaction={transaction}
                     i={i}
                     filterTypes={filterTypes}
                     type=''
                  />
               ))}
            </PaginationBlock>





            {/* <BlockDetail blockType='shard' {...block} loader={loader} />
            <Grid style={{ margin: '30px 0 20px 0' }}>
               <Grid.Row>
                  <Grid.Column textAlign='left' style={{ padding: '0px' }}>
                     <h2 style={{ display: 'inline-block' }}>
                        <Image className="column-icon" src={TransactionsImage} />
                        Transactions
                     </h2>
                     <h3 className='color-brown-grey' style={{ display: 'inline-block', padding: '0 0 0 20px' }}>
                        ? of ?
                     </h3>
                  </Grid.Column>
               </Grid.Row>
            </Grid> */}
            {/* {NumTransactionsIndex !== 0 && <TransactionsList transactions={transactions} />} */}
         </Container>
      )
   }
}

export const ShardBlockDetailWithRouter = withRouter(ShardBlockDetail)