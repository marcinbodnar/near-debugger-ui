import React, { Component, Fragment } from 'react'
import {
   withRouter,
   Link,
} from 'react-router-dom'

import { getBeaconBlockByIndex } from '../../utils/api'

import MHeightImage from '../../images/icon-m-height.svg'
import MUserImage from '../../images/icon-m-user.svg'
import MTransactionsImage from '../../images/icon-m-transaction.svg'
import MCopyImage from '../../images/icon-m-copy.svg'
import MSizeImage from '../../images/icon-m-size.svg'

import {
   Container,
   Loader,
   List,
   Grid,
   Image,
   Dimmer,

} from 'semantic-ui-react'


class BeaconBlockDetail extends Component {
   state = {
      block: {
         index: null,
         hash: '',
         parentHash: '',
         shardBlockHash: '',
         shardBlockIndex: null,
         numReceiptsIndex: null,
         NumTransactionsIndex: null,
      },
      loader: true
   }

   updateBlock(blockIndex) {
      this.setState({
         loader: true,
      })

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
            },
            loader: false,
         })
      }).catch((error) => {
         console.log(error)
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
      const { block, loader } = this.state
      const { index, hash, parentHash, shardBlockHash, shardBlockIndex, numReceiptsIndex, NumTransactionsIndex } = block

      return (
         <Container>
            <Grid className='page-title'>
               <Grid.Column as='h1'>Block: <span className="color-black"> #{index}</span></Grid.Column>
            </Grid>

            <Grid className='box'>
               <Dimmer inverted active={loader}>
                  <Loader />
               </Dimmer>
               <Fragment>
                  <Grid.Row width={4} className='border-bottom'>
                     <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
                        <Image src={MHeightImage} align='left' className='icon-tiny' />
                        <h5>HEIGHT</h5>
                        <h2>{index}</h2>
                     </Grid.Column>
                     <Grid.Column computer={4} tablet={8} mobile={16} className='border-right'>
                        <Image src={MTransactionsImage} align='left' className='icon-tiny' />
                        <h5>TRANSACTIONS</h5>
                        <h2>{NumTransactionsIndex}</h2>
                     </Grid.Column>
                     <Grid.Column computer={4} tablet={8} mobile={16} className='border-right'>
                        <Image src={MSizeImage} align='left' className='icon-tiny' />
                        <h5>SIZE</h5>
                        <h2>26,544 Bytes</h2>
                     </Grid.Column>
                     <Grid.Column computer={5} tablet={8} mobile={16}>
                        <Image src={MUserImage} align='left' className='icon-tiny' />
                        <h5>WITNESS</h5>
                        <h3 className='color-blue'>@vlad.near</h3>
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className=''>
                     <Grid.Column largeScreen={6} computer={5} tablet={8}>
                        <h5>CREATED</h5>
                        <h3>March 20, 2019 at 5:34:09pm</h3>
                     </Grid.Column>
                     <Grid.Column largeScreen={10} computer={11} tablet={8}>
                        <h5>ADDRESS</h5>
                        <List floated='left' horizontal>
                           <List.Item as='h3'>{hash}</List.Item>
                           <List.Item ><Image src={MCopyImage} className='copy-image' /></List.Item>
                        </List>
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className='background-lg border-bottom'>
                     <Grid.Column computer={16} tablet={16}>
                        <h5>PARENT HASH</h5>
                        <List floated='left' horizontal>
                           <List.Item 
                              as={Link}
                              to={`/beacon-block/${index - 1}`}
                              className='h3 color-seafoam-blue'
                           >{parentHash}</List.Item>
                           <List.Item ><Image src={MCopyImage} className='copy-image' /></List.Item>
                        </List>
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className='background-lg'>
                     <Grid.Column computer={16} tablet={16}>
                        <h5>SHARD BLOCK HASH</h5>
                        <List floated='left' horizontal>
                           <List.Item 
                              as={Link}
                              to={`/shard-block/${shardBlockIndex}`}
                              className='h3 color-seafoam-blue'
                           >{shardBlockHash}</List.Item>
                           <List.Item ><Image src={MCopyImage} className='copy-image' /></List.Item>
                        </List>
                     </Grid.Column>
                  </Grid.Row>
               </Fragment>
            </Grid>
         </Container>
      )
   }
}

export const BeaconBlockDetailWithRouter = withRouter(BeaconBlockDetail)