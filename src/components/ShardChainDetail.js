import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
   withRouter,
} from 'react-router-dom'

import { listShardBlocks } from '../utils/api'

import '../index.css'

import {
   Container,
} from 'semantic-ui-react'

import BlocksList from './BlocksList'


class ShardChainDetail extends Component {
   state = {
      blocks: [],
   }

   componentDidMount() {
      listShardBlocks().then(response => {
         this.setState({ blocks: response.data })
      }).catch((error) => {
         this.props.history.push({
            pathname: `/error`,
         })
      })
   }

   render() {
      const { blocks } = this.state

      return (
         <Container className='container-list'>
            <BlocksList blockType='shard' blocks={blocks} />
         </Container>
      )
   }
}

export const ShardChainDetailWithRouter = withRouter(ShardChainDetail)