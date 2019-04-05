import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import {
   Grid,
   List,
} from 'semantic-ui-react'

import TransactionFilter from '../../images/icon-m-filter.svg'

import { PaginationTab } from './PaginationTab'
import PaginationFilter from './PaginationFilter'
import PaginationPaging from './PaginationPaging'
import PaginationSummary from './PaginationSummary'
import ShowingSwitcher from '../common/ShowingSwitcher'
import Search from '../common/Search'

import styled from 'styled-components'

const PaginationBlockGrid = styled(Grid)`
   & > .row:first-child {
      min-height: 70px;
   }

   &&& .pagination-block-paging {
      padding: 0px;
   }

   &&& .pagination-block-top {
      padding-left: 0px;

      &-paging-summary {
         padding-left: 20px;
      }

      &-search {
         padding: 0px;
      }

      &-paging {
         padding-left: 0px;
      }
   }
`


class PaginationBlock extends Component {
   static defaultProps = {
      onPageChanged: () => { },
   }

   state = {
      search: '',
      dropdown: false,
      dropdownType: this.props.type ? this.props.filterTypes[this.props.type].img : TransactionFilter,
      pagingDropdown: false,
      pagingValue: 10,

      buttonRadio: false,
   }

   handleOnClick = () => {
      this.setState({
         dropdown: !this.state.dropdown
      })
   }

   handleOnClickPaging = () => {
      this.setState({
         pagingDropdown: !this.state.pagingDropdown
      })
   }

   handleChange = (e, { name, value }) => {
      this.setState(() => ({ [name]: value }))
   }

   handleSubmit = () => {
      console.log('not ready yet')
   }

   handleDropdownClick = (dropdownType) => {
      this.setState({
         dropdownType,
         dropdown: !this.state.dropdown
      })
   }

   handlePagingDropdownClick = (pagingValue) => {
      this.setState({
         pagingValue,
         pagingDropdown: !this.state.pagingDropdown
      })

      this.props.onPageChanged(1, pagingValue)
   }

   handleTabChange(pageNumber) {
      // this.setState({
      //    pageNumber: pageNumber,
      //    loader: true,
      // })
      // this.updateBlock(pageNumber)
      // return pageNumber
   }

   buttonRadioClick = () => {
      this.setState((state) => ({
         buttonRadio: !state.buttonRadio
      }))
   }

   render() {
      const { filterTypes, type, pageNumber = 0 } = this.props
      const { buttonRadio, dropdownType, dropdown, search, pagingValue, pagingDropdown } = this.state

      const {
         totalRecords = 1100,
         pageLimit = 10,
         initialPage = 0,
         onPageChanged = () => { },
         pageNeighbors = 1
      } = this.props

      const filterTypesByType = type
         ? [filterTypes[type]]
         : filterTypes


      return (
         <PaginationBlockGrid className='border-top-bold border-bottom-bold' stackable columns={2}>
            <Grid.Row className='border-bottom-light'>
               <Grid.Column width={10} verticalAlign='middle' className='pagination-block-top'>
                  {type === 5
                     ? (
                        <ShowingSwitcher
                           buttonRadioClick={this.buttonRadioClick}
                           buttonRadio={buttonRadio}
                        />
                     ) : (
                        filterTypesByType && (
                           <List horizontal verticalAlign='middle'>
                              <List.Item width={6} className=''>
                                 <PaginationFilter
                                    filterTypesByType={filterTypesByType}
                                    handleOnClick={this.handleOnClick}
                                    dropdownType={dropdownType}
                                    handleDropdownClick={this.handleDropdownClick}
                                    dropdown={dropdown}
                                 />
                              </List.Item>
                              <List.Item width={6} as='h6' className='pagination-block-top-paging-summary'>
                                 <PaginationSummary
                                    pageNumber={pageNumber}
                                    pageLimit={pageLimit}
                                    totalRecords={totalRecords}
                                 />
                              </List.Item>
                           </List>
                        )
                     )}
               </Grid.Column>
               <Grid.Column width={6} textAlign='right' verticalAlign='middle' className='pagination-block-top-search'>
                  <Search
                     handleSubmit={this.handleSubmit}
                     handleChange={this.handleChange}
                     search={search}
                  />
               </Grid.Column>
            </Grid.Row>

            {this.props.children}

            <Grid.Row className='border-top-light'>
               <Grid.Column width={8} verticalAlign='middle' className='pagination-block-top-paging'>
                  <List horizontal verticalAlign='middle'>
                     <List.Item width={6} className=''>
                        <PaginationPaging
                           handleOnClickPaging={this.handleOnClickPaging}
                           pagingValue={pagingValue}
                           pagingDropdown={pagingDropdown}
                           handlePagingDropdownClick={this.handlePagingDropdownClick}
                        />
                     </List.Item>
                     <List.Item width={6} as='h6' className='pagination-block-top-paging-summary'>
                        <PaginationSummary
                           pageNumber={pageNumber}
                           pageLimit={pageLimit}
                           totalRecords={totalRecords}
                        />
                     </List.Item>
                  </List>
               </Grid.Column>
               <Grid.Column width={8} className='pagination-block-paging' textAlign='right'>
                  <PaginationTab
                     totalRecords={totalRecords}
                     pageLimit={pageLimit}
                     initialPage={initialPage}
                     onPageChanged={onPageChanged}
                     pageNeighbors={pageNeighbors}
                  />
               </Grid.Column>
            </Grid.Row>
         </PaginationBlockGrid>
      )
   }
}

export default PaginationBlock