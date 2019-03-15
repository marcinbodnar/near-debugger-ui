import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
   withRouter,
} from 'react-router-dom'

import { getBeaconBlockByIndex } from '../utils/api'

import '../index.css'

import {
   Container,
} from 'semantic-ui-react'

import BlockDetail from './BlockDetail'


class BeaconBlockDetail extends Component {
   state = {
      blockType: 'shard',
      block: {
         index: null,
         hash: '',
         parentHash: '',
         shardBlockHash: '',
         shardBlockIndex: null,
         numReceiptsIndex: null,
         NumTransactionsIndex: null,
      },
   }

   updateBlock(blockIndex) {
      getBeaconBlockByIndex(blockIndex).then(response => {
         this.setState({
            block: {
               index: response.index,
               hash: response.hash,
               parentHash: response.parent_hash,
               shardBlockHash: response.shard_block.hash,
               shardBlockIndex: response.shard_block.index,
               numReceiptsIndex: response.shard_block.num_receipts,
               NumTransactionsIndex: response.shard_block.num_transactions,
            }
         })
      }).catch((error) => {
         console.log(error);
      })
   }

   componentDidMount() {
      const { blockIndex } = this.props.match.params
      this.updateBlock(blockIndex)
   }

   /* ASK */
   componentDidUpdate(prevProps) {
      if (prevProps.match.params.blockIndex !== this.props.match.params.blockIndex) {
         this.updateBlock(this.props.match.params.blockIndex)
      }
   }

   render() {
      const { block } = this.state
      const { index } = block

      return (
         <Container>
            <h1><span className="color-charcoal-grey">Block</span> #{index}</h1>
            {block.index && <BlockDetail blockType='beacon' {...block} />}
            {/* {NumTransactionsIndex && <TransactionsList transactions={transactions} />} */}
         </Container>
      )
   }
}

export const BeaconBlockDetailWithRouter = withRouter(BeaconBlockDetail)