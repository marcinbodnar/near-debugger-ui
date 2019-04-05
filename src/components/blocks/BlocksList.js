import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import {
   Link,
} from 'react-router-dom'

import {
   Grid,
   Image,
   Dimmer,
   Loader,
} from 'semantic-ui-react'

import MTransactionsImage from '../../images/icon-m-transaction.svg'
import MReceiptsImage from '../../images/icon-m-receipt.svg'


class BlocksList extends Component {
   render() {
      const { blocks, blockType, recent, loader } = this.props

      return (
         <Fragment>
            <Dimmer inverted active={loader}>
               <Loader  />
            </Dimmer>
            
            {blocks.map((block, i) => (
               <Grid.Row
                  verticalAlign='middle'
                  className='border-bottom-light main-row'
               >
                  <Grid.Column computer={11}>
                     <Grid verticalAlign='middle'>
                        <Grid.Column>
                           <Link to={`/${blockType}-block/${block.index}`} className='color-black font-bold'>{block.index}</Link>
                           <br />
                           <span className='color-brown-grey font-small'>
                              <Image className="column-icon-s" src={MTransactionsImage} />
                              {block.num_transactions != null ? block.num_transactions : '?'} Transactions

                              {blockType === 'shard' && (
                                 <span>
                                    <Image className="column-icon-s" src={MReceiptsImage} />
                                    {block.num_receipts != null ? block.num_receipts : '?'} Receipts
                                 </span>
                              )}
                           </span>
                        </Grid.Column>
                     </Grid>
                  </Grid.Column>
                  <Grid.Column computer={5} textAlign='right'>
                     by <a href='/'>?</a>
                     <br />
                     <span className='font-small'>
                        ? sec ago
                     </span>
                  </Grid.Column>
               </Grid.Row>
            ))}
         </Fragment>
      )
   }
}

export default BlocksList