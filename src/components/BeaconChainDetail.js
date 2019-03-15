import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
   withRouter,
} from 'react-router-dom'

import { listBeaconBlocks } from '../utils/api'

import '../index.css'

import {
   Container,
} from 'semantic-ui-react'

import BlocksList from './BlocksList'


class BeaconChainDetail extends Component {
   state = {
      blocks: [],
   }

   componentDidMount() {
      listBeaconBlocks().then(response => {
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
            <BlocksList blockType='beacon' blocks={blocks} />
         </Container>
      )
   }
}

export const BeaconChainDetailWithRouter = withRouter(BeaconChainDetail)