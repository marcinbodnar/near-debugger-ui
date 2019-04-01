import React, { Component } from 'react'
import {
   withRouter,
} from 'react-router-dom'

import { listShardBlocks, generatePaginationOptions } from '../utils/api'

import '../index.css'

import {
   Container,
   Grid,
} from 'semantic-ui-react'

import BlocksList from './BlocksList'
// import { PaginationTab } from './PaginationTab'
import PaginationBlock from './PaginationBlock'

class ShardChainDetail extends Component {
   state = {
      blocks: [],
      loader: true,

      numPages: 0,
      pageNumber: 0,
      pageLimit: 10,
      sorted: [{
         id: 'index',
         desc: true,
      }],
   }

   updateBlock(pageNumber = 0, pagingValue) {
      const paginationOptions = generatePaginationOptions(
         pageNumber,
         pagingValue || this.state.pageLimit,
         this.state.sorted,
      )

      listShardBlocks(paginationOptions).then(response => {
         this.setState({
            blocks: response.data,
            numPages: response.num_pages,
            loader: false,
         })
      }).catch((error) => {
         this.props.history.push({
            pathname: `/error`,
         })
      })
   }

   componentDidMount() {
      this.updateBlock()
   }

   handleTabChange(pageNumber = 0, pagingValue = this.state.pageLimit) {
      this.setState({
         pageNumber: pageNumber,
         loader: true,
         pageLimit: pagingValue,
      })
      this.updateBlock(pageNumber, pagingValue)
      return pageNumber
   }


   render() {
      const { blocks, loader } = this.state
      const { pageLimit, numPages, pageNumber } = this.state
      const totalRecords = numPages * pageLimit
      const first = 1 + pageNumber * pageLimit
      const last = Math.min(first + pageLimit - 1, totalRecords)

      return (
         <Container>
            <Grid className='page-title'>
               <Grid.Column as='h1'>Shard Blocks</Grid.Column>
            </Grid>

            <PaginationBlock
               filterTypes={null}

               totalRecords={totalRecords}
               pageLimit={pageLimit}
               initialPage={0}
               onPageChanged={(pageNumber, pagingValue) => this.handleTabChange(pageNumber - 1, pagingValue)}
               pageNeighbors={1}
            >
               <BlocksList
                  blockType='shard'
                  blocks={blocks}
                  loader={loader}
               />
            </PaginationBlock>
         </Container>



         // <Container className='container-list'>
         //    <BlocksList blockType='shard' blocks={blocks} loader={loader} />
         //    {numPages !== 0 && (
         //       <Grid stackable>
         //          <Grid.Row width={2}>
         //             <Grid.Column computer={6}>
         //                <h4>
         //                   VIEWING {first}-{last}
         //                   <span className="color-brown-grey"> OF {totalRecords}</span>
         //                </h4>
         //             </Grid.Column>
         //             <Grid.Column computer={10} textAlign='right'>
         //                <PaginationTab
         //                   totalRecords={totalRecords}
         //                   pageLimit={pageLimit}
         //                   initialPage={0}
         //                   onPageChanged={(pageNumber) => this.handleTabChange(pageNumber - 1)}
         //                   pageNeighbors={1}
         //                />
         //             </Grid.Column>
         //          </Grid.Row>
         //       </Grid>
         //    )}
         // </Container>
      )
   }
}

export const ShardChainDetailWithRouter = withRouter(ShardChainDetail)