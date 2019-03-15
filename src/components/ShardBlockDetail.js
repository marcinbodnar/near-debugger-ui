import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
   withRouter,
} from 'react-router-dom'

import { getShardBlockByIndex } from '../utils/api'

import '../index.css'

import {
   Container,
} from 'semantic-ui-react'

import BlockDetail from './BlockDetail'
import TransactionsList from './TransactionsList'


class ShardBlockDetail extends Component {
   state = {
      block: {
         index: null,
         hash: '',
         parentHash: '',
         transactions: [],
         NumTransactionsIndex: null,
      }
   }

   updateBlock(blockIndex) {
      getShardBlockByIndex(blockIndex).then(response => {
         this.setState(() => ({
            block: {
               index: response.index,
               hash: response.hash,
               parentHash: response.parent_hash,
               transactions: response.transactions,
               NumTransactionsIndex: response.transactions.length,
            }
         }))
      }).catch((error) => {
         console.log(error);
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
      const { block } = this.state
      const { index, transactions, NumTransactionsIndex } = block

      return (
         <Container>
            <h1><span className="color-charcoal-grey">Shard Block</span> #{index}</h1>
            {block.index && <BlockDetail blockType='shard' {...block} />}
            {NumTransactionsIndex !== 0 && <TransactionsList transactions={transactions} />}
         </Container>
      )
   }
}

export const ShardBlockDetailWithRouter = withRouter(ShardBlockDetail)