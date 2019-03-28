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

   state = {
      search: '',
      dropdown: false,
      dropdownType: TransactionFilter,
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

      const { filterTypes, type } = this.props
      const { buttonRadio } = this.state

      const filterTypesByType = type
         ? [filterTypes[0], filterTypes[type]]
         : filterTypes


      return (
         <Grid className='border-top-bold border-bottom-bold' stackable columns={2}>
            <Grid.Row className='border-bottom-light'>
               <Grid.Column width={10} verticalAlign='middle'>

                  <Grid className='' verticalAlign='middle' style={{ minHeight: '70px' }}>
                     {type === 5
                        ? (
                           <Fragment>
                              <Grid.Column style={{ width: '90px', paddingLeft: '0px', paddingRight: '0px', position: 'relative' }}>
                                 <h6>SHOWING</h6>
                              </Grid.Column>
                              <Grid.Column only='tablet computer' style={{ width: '150px', paddingLeft: '0px', paddingRight: '0px', borderRight: '1px solid #e6e6e6' }}>
                                 <div
                                    className='button-radio'
                                    style={{}}
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
                              <Grid.Column style={{ width: '90px', paddingLeft: '0px', paddingRight: '0px', position: 'relative' }}>

                                 <Button
                                    onClick={() => this.setState({ dropdown: !this.state.dropdown })}
                                    // onBlur={() => this.setState({ dropdown: !this.state.dropdown })}
                                    className='filter-dropdown-tr'
                                    style={{ backgroundImage: `url(${this.state.dropdownType}), url(${ArrowDown})` }}
                                 // style={{height: '100px'}}

                                 ></Button>


                                 <List selection verticalAlign='middle' className={`filter-dropdown ${this.state.dropdown ? '' : 'hide'}`}>
                                    {filterTypesByType.map((type, i) => (
                                       <List.Item
                                          key={`filter-${i}`}
                                          style={{ height: '40px' }}
                                          onClick={() => this.handleDropdownClick(type.img)}
                                       >
                                          <Image src={type.img} style={{ width: '18px', margin: '0 10px' }} />
                                          <List.Content as='h6'>
                                             {type.name}
                                          </List.Content>
                                       </List.Item>
                                    ))}
                                 </List>

                              </Grid.Column>
                              <Grid.Column only='tablet computer' style={{ width: '150px', paddingLeft: '0px', paddingRight: '0px', borderRight: '1px solid #e6e6e6' }}>
                                 <h6>FILTER BY TYPE</h6>
                              </Grid.Column>
                           </Fragment>
                        )}

                     <Grid.Column style={{ width: 'auto', paddingLeft: '20px', paddingRight: '0px' }}>
                        <h6><span className='color-charcoal-grey h6'>1-10</span> OF 254 TOTAL</h6>
                     </Grid.Column>
                  </Grid>
               </Grid.Column>
               <Grid.Column width={6} textAlign='right' style={{ padding: '0px' }}>
                  <Form onSubmit={this.handleSubmit} className='search-form'>
                     <Form.Input className='search' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Search transactions and receipts...' />
                  </Form>
               </Grid.Column>
            </Grid.Row>

            {this.props.children}

            <Grid.Row className='border-top-light'>
               <Grid.Column width={10} verticalAlign='middle'>
                  <Grid className='' verticalAlign='middle' style={{ minHeight: '70px' }}>
                     <Grid.Column style={{ width: '90px', paddingLeft: '0px', paddingRight: '0px', position: 'relative' }}>
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
                                 style={{ height: '34px' }}
                                 onClick={() => this.handlePagingDropdownClick(type)}
                              >
                                 <List.Content verticalAlign='middle' style={{ fontSize: '14px', lineHeight: '22px', fontWeight: '700', paddingLeft: '6px' }}>
                                    {type}
                                 </List.Content>
                              </List.Item>
                           ))}
                        </List>

                     </Grid.Column>
                     <Grid.Column only='tablet computer' style={{ width: '150px', paddingLeft: '0px', paddingRight: '0px', borderRight: '1px solid #e6e6e6' }}>
                        <h6>PER PAGE</h6>
                     </Grid.Column>
                     <Grid.Column style={{ width: 'auto', paddingLeft: '20px', paddingRight: '0px' }}>
                        <h6><span className='color-charcoal-grey h6'>1-10</span> OF 254 TOTAL</h6>
                     </Grid.Column>
                  </Grid>
               </Grid.Column>
               <Grid.Column width={6} textAlign='right' style={{ padding: '0px' }}>
                  <PaginationTab
                     totalRecords={1100}
                     pageLimit={10}
                     initialPage={0}
                     onPageChanged={(pageNumber) => this.handleTabChange(pageNumber - 1)}
                     pageNeighbors={1}
                  />
               </Grid.Column>
            </Grid.Row>
         </Grid>
      )
   }
}


export default PaginationBlock