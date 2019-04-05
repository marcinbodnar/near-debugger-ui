import React, { Component } from 'react'
import {
   withRouter,
} from 'react-router-dom'

import { listBeaconBlocks, generatePaginationOptions } from '../../utils/api'

import {
   Container,
   Grid,
} from 'semantic-ui-react'

import BlocksList from './BlocksList'
import PaginationBlock from '../pagination/PaginationBlock'


class BeaconChainDetail extends Component {
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

      listBeaconBlocks(paginationOptions).then(response => {
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
               <Grid.Column as='h1'>Beacon Blocks</Grid.Column>
            </Grid>

            <PaginationBlock
               filterTypes={null}

               totalRecords={totalRecords}
               pageLimit={pageLimit}
               initialPage={0}
               onPageChanged={(pageNumber, pagingValue) => this.handleTabChange(pageNumber - 1, pagingValue)}
               pageNeighbors={1}

               pageNumber={pageNumber}
            >
               <BlocksList
                  blockType='beacon'
                  blocks={blocks}
                  loader={loader}
               />
            </PaginationBlock>
         </Container>
      )
   }
}

export const BeaconChainDetailWithRouter = withRouter(BeaconChainDetail)