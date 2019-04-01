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

import PaginationBlock from './PaginationBlock'

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


const TransactionRow = ({ toggleShowSub, i, transaction, showSub }) => (
   <Grid.Row
      onClick={() => transaction.body && toggleShowSub(i)}
      verticalAlign='middle' className='border-top-light'
      style={transaction.body && { cursor: 'pointer' }}
   >
      <Grid.Column  width={12}>
         <Grid verticalAlign='middle'>
            <Grid.Column style={{ width: '90px', paddingLeft: '0px', paddingRight: '0px', position: 'relative', flex: '0 0 90px' }}>
               <Image src={TransactionTypeAcct} style={{ width: '18px', margin: '0 24px 0 18px' }} align='left' />
               {showSub
                  ? <Image src={ArrowDown} style={{ width: '20px', top: '4px', left: '-6px' }} />
                  : <Image src={ArrowRight} style={{ width: '10px', margin: '0 0 0 0' }} />
               }

            </Grid.Column>
            <Grid.Column style={{ width: 'auto', paddingLeft: '0px', paddingRight: '0px', flex: '1' }}>
               <span style={{ fontWeight: '600', color: '#24272a' }}>
                  New account Created: @erik.near aRWDSa...
               </span>
               <br />
               <span class='color-brown-grey' style={{ fontSize: '12px' }}>by @username.goes.here</span>
            </Grid.Column>
         </Grid>
      </Grid.Column>
      <Grid.Column width={4} textAlign='right'>
         <span class='color-blue' style={{ fontWeight: '600' }}>
            69a368
         </span>
         <br />
         <span class='color-brown-grey' style={{ fontSize: '12px' }}>
            Completed 2 hrs ago
         </span>
      </Grid.Column>
   </Grid.Row>
)


class TransactionRowMain extends Component {
   state = {
      showSub: false,
   }

   toggleShowSub = (index) => {
      this.setState({
         showSub: !this.state.showSub
      })
   }

   render() {
      const { transaction, i, toggleShowSub } = this.props

      return (
         <Fragment>
            <TransactionRow showSub={this.state.showSub} toggleShowSub={this.toggleShowSub} i={i} transaction={transaction} />

            <Grid.Row columns={1} verticalAlign='middle' className={`border-top-light ${this.state.showSub ? '' : 'hide'}`} style={{ mipadding: '0px' }}>
               <Grid.Column>
                  <Grid columns={1} className={`${i && 'border-top'} border-bottom`} style={{ background: '#f8f8f8', minHeight: '58px' }}>
                     <Grid columns={2} className='border-left-bold' style={{ padding: '0px 0 0 10px', margin: '0 0 0 24px' }}>
                        {/* {transaction.body.length} */}
                        {transaction.body && transaction.body.length && transaction.body.map((t, j) => (
                           <Fragment>
                              <TransactionRowMain transaction={t} i={j} toggleShowSub={toggleShowSub} />
                           </Fragment>
                        ))}
                     </Grid>
                  </Grid>
               </Grid.Column>
            </Grid.Row>
         </Fragment>
      )
   }
}

class TransactionsList extends Component {
   static propTypes = {
      transactions: PropTypes.object.isRequired,
   }

   state = {
      search: '',
      dropdown: false,
      dropdownType: TransactionFilter,
      pagingDropdown: false,
      pagingValue: 10,
      pagingTypes: [10, 20, 50, 100],
      transactionTypes: [
         { img: TransactionFilter, name: 'ALL' },
         { img: TransactionTypeAcct, name: 'CREATE ACCOUNT' },
         { img: TransactionTypeTransfer, name: 'TRANSFER' },
         { img: TransactionTypeCall, name: 'FUNCTION CALL' },
         { img: TransactionTypeStake, name: 'STAKE' },
         { img: TransactionTypeContract, name: 'DEPLOY CONTRACT' },
         { img: TransactionTypeKeySwap, name: 'SWAP KEY' },
         { img: TransactionTypeKeyNew, name: 'ADD KEY' },
         { img: TransactionTypeKeyDelete, name: 'DELETE KEY' },
         { img: TransactionTypeAcct, name: 'ADD BLS KEY' },
         { img: MTransactionsImage, name: 'UNKNOWN CALL' },
      ],

      transactionsX: new Array(10).fill({
         index: 1,
         showSub: false,
         body: new Array(3).fill({
            index: 1,
            showSub: false,
            body: new Array(2).fill({
               index: 1,
               showSub: false,
               body: new Array(3).fill({
                  index: 1,
                  showSub: false,
               })
            })
         })
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
   }

   render() {
      const { transactions } = this.props


      const { transactionsX } = this.state



      return (
         <Fragment>
            <PaginationBlock>
               {transactionsX.map((transaction, i) => (
                  <TransactionRowMain transaction={transaction} i={i} />
               ))}
            </PaginationBlock>









            {/* <Grid className='border-top-bold border-bottom-bold' stackable columns={2}>
               <Grid.Row>
                  <Grid.Column width={10} verticalAlign='middle'>
                     <Grid className='' verticalAlign='middle' style={{ minHeight: '70px' }}>
                        <Grid.Column style={{ width: '90px', paddingLeft: '0px', paddingRight: '0px', position: 'relative' }}>
                           <Button
                              onClick={() => this.setState({ dropdown: !this.state.dropdown })}
                              // onBlur={() => this.setState({ dropdown: !this.state.dropdown })}
                              className='filter-dropdown-tr'
                              style={{ backgroundImage: `url(${this.state.dropdownType}), url(${ArrowDown})` }}
                           // style={{height: '100px'}}

                           ></Button>


                           <List selection verticalAlign='middle' className={`filter-dropdown ${this.state.dropdown ? '' : 'hide'}`}>
                              {this.state.transactionTypes.map((type) => (
                                 <List.Item
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

               {transactionsX.map((transaction, i) => (
                  <Fragment>
                     <TransactionRowMain transaction={transaction} i={i} />
                  </Fragment>
               ))}

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
                              {this.state.pagingTypes.map((type) => (
                                 <List.Item
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
                     
                  </Grid.Column>
               </Grid.Row>
            </Grid> */}






            {/* <Grid style={{ marginTop: '30px' }}>
               <Grid.Row>
                  <Grid.Column textAlign='left' style={{ padding: '0px' }}>
                     <h2 style={{ display: 'inline-block' }}>
                        <Image className="column-icon" src={TransactionsImage} />
                        Transactions
                     </h2>
                     <h3 className='color-brown-grey' style={{ display: 'inline-block', padding: '0 0 0 20px' }}>
                        {transactions.length} of {transactions.length}
                     </h3>
                  </Grid.Column>
               </Grid.Row>
            </Grid> */}
            {/* <Grid className='recent-x'>
               {transactions.map((transaction, i) => (
                  <Grid.Row key={`transactions-${i}`}>
                     <Grid.Column textAlign='left' floated='left' width={10} style={{ wordWrap: 'break-word' }}>
                        <Link
                           to={`/transaction/${transaction.hash}`}
                        >
                           #{transaction.hash}
                        </Link>
                        <br />
                        <span style={{ fontWeight: '700' }}>{transaction.type} </span>
                        <span className="color-brown-grey">by {transaction.body.originator}</span>
                     </Grid.Column>
                     <Grid.Column textAlign='right' floated='right' width={6} style={{ color: '#999', wordWrap: 'break-word' }}>
                        <Link
                           to={`/contract/${transaction.body.contract_id}`}
                        >
                           {transaction.body.contract_id}
                        </Link>
                        <Image className="column-icon-r" src={MDocImage} />
                        <br />
                        <span style={{ color: '#bbb', fontSize: '12px' }}>
                           ? AM
                        </span>
                     </Grid.Column>
                  </Grid.Row>
               ))}
            </Grid> */}
         </Fragment>
      )
   }
}

export default TransactionsList