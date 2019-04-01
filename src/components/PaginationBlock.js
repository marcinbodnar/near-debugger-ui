import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
   Link,
} from 'react-router-dom'

import '../index.css'

import {
   Grid,
   Image,
   Form,
   Button,
   Segment,
   List,
} from 'semantic-ui-react'

import TransactionsImage from '../images/icon-transactions.svg'
import TransactionFilter from '../images/icon-m-filter.svg'
import ArrowDown from '../images/icon-arrow-down.svg'
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


import MDocImage from '../images/icon-m-doc.svg'

import { PaginationTab } from './PaginationTab'




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
      pagingTypes: [10, 20, 50, 100],

      buttonRadio: false,
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
      const { buttonRadio } = this.state

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
         <Grid className='border-top-bold border-bottom-bold pagination-block' stackable columns={2}>
            <Grid.Row className='border-bottom-light'>
               <Grid.Column width={10} verticalAlign='middle'>

                  <Grid className='pagination-block-top' verticalAlign='middle'>
                     {type === 5
                        ? (
                           <Fragment>
                              <Grid.Column as='h6' className='pagination-block-showing color-charcoal-grey'>
                                 SHOWING
                              </Grid.Column>
                              <Grid.Column only='tablet computer' className='pagination-block-switcher'>
                                 <div
                                    className='button-radio'
                                    onClick={this.buttonRadioClick}
                                 >
                                    <div className={`left ${!buttonRadio ? 'on' : 'off'}`}>
                                       ALL
                                    </div>
                                    <div className={`right ${buttonRadio ? 'on' : 'off'}`}>
                                       MINE
                                    </div>
                                 </div>
                              </Grid.Column>
                           </Fragment>
                        ) : (
                           <Fragment>
                              {filterTypes && (
                                 <Fragment>
                                    <Grid.Column className='pagination-block-filter'>
                                       <Button
                                          onClick={() => this.setState({ dropdown: !this.state.dropdown })}
                                          // onBlur={() => this.setState({ dropdown: !this.state.dropdown })}
                                          className='filter-dropdown-tr'
                                          style={{ backgroundImage: `url(${this.state.dropdownType}), url(${ArrowDown})` }}
                                       ></Button>

                                       <List selection verticalAlign='middle' className={`filter-dropdown ${this.state.dropdown ? '' : 'hide'}`}>
                                          {filterTypesByType.map((type, i) => (
                                             <List.Item
                                                key={`filter-${i}`}
                                                onClick={() => this.handleDropdownClick(type.img)}
                                             >
                                                <Image src={type.img} />
                                                <List.Content as='h6'>{type.name}</List.Content>
                                             </List.Item>
                                          ))}
                                       </List>
                                    </Grid.Column>
                                    <Grid.Column as='h6' className='pagination-block-filter-by' only='tablet computer'>
                                       FILTER BY TYPE
                                    </Grid.Column>
                                    <Grid.Column as='h6' className='pagination-block-paging-summary'>
                                       <span className='color-charcoal-grey h6'>1-10</span> OF 254 TOTAL
                                    </Grid.Column>
                                 </Fragment>
                              )}
                           </Fragment>
                        )}
                  </Grid>
               </Grid.Column>
               <Grid.Column width={6} textAlign='right' className='pagination-block-search'>
                  <Form onSubmit={this.handleSubmit} className='search-form'>
                     <Form.Input className='search' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Search transactions and receipts...' />
                  </Form>
               </Grid.Column>
            </Grid.Row>

            {this.props.children}

            <Grid.Row className='border-top-light'>
               <Grid.Column width={8} verticalAlign='middle'>
                  <Grid className='pagination-block-top' verticalAlign='middle'>
                     <Grid.Column className='pagination-block-paging'>
                        <Button
                           onClick={() => this.setState({ pagingDropdown: !this.state.pagingDropdown })}
                           // onBlur={() => this.setState({ dropdown: !this.state.dropdown })}
                           className='paging-dropdown-tr'
                           style={{ backgroundImage: ` url(${ArrowDown})` }}
                        >
                           {this.state.pagingValue}
                        </Button>

                        <List selection verticalAlign='middle' className={`paging-dropdown ${this.state.pagingDropdown ? '' : 'hide'}`}>
                           {this.state.pagingTypes.map((type, i) => (
                              <List.Item
                                 key={`page-${i}`}
                                 onClick={() => this.handlePagingDropdownClick(type)}
                              >
                                 <List.Content verticalAlign='middle'>{type}</List.Content>
                              </List.Item>
                           ))}
                        </List>

                     </Grid.Column>
                     <Grid.Column as='h6' className='pagination-block-per-page' only='tablet computer'>
                        PER PAGE
                     </Grid.Column>
                     <Grid.Column as='h6' className='pagination-block-paging-summary'>
                        <span className='color-charcoal-grey h6'>{(pageNumber * pageLimit) + 1}-{(pageNumber + 1) * pageLimit} </span>
                        OF {totalRecords} TOTAL
                     </Grid.Column>
                  </Grid>
               </Grid.Column>
               <Grid.Column width={8} className='pagination-tab' textAlign='right'>
                  <PaginationTab
                     totalRecords={totalRecords}
                     pageLimit={pageLimit}
                     initialPage={initialPage}
                     onPageChanged={onPageChanged}
                     pageNeighbors={pageNeighbors}
                  />
               </Grid.Column>
            </Grid.Row>
         </Grid>
      )
   }
}


export default PaginationBlock