import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
   withRouter,
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


export const TransactionRowType = ({ toggleShowSub, i, transaction, showSub, iconImage }) => (
   <Grid.Row
      verticalAlign='middle'
      className='border-bottom-light main-row'

   >
      <Grid.Column computer={11}>
         <Grid verticalAlign='middle'>
            <Grid.Column className='col-image'>
               <div className='main-image'>
                  <Image src={iconImage} className='' align='left' />
               </div>
               {showSub
                  ? <Image onClick={() => transaction.body && toggleShowSub(i)} src={ArrowDown} className='dropdown-image dropdown-image-down' />
                  : <Image onClick={() => transaction.body && toggleShowSub(i)} src={ArrowRight} className='dropdown-image dropdown-image-right' />
               }
            </Grid.Column>
            <Grid.Column className='main-row-title'>
               New account Created:
               <Link
                  to=''
                  className='color-black'
               >@erik.near aRWDSa...</Link>
               <br />
               <span className='font-small'>
                  by
                  <Link
                     to=''
                     className='font-bold'
                  > @username.goes.here</Link>
               </span>
            </Grid.Column>
         </Grid>
      </Grid.Column>
      <Grid.Column computer={5} textAlign='right'>
         <Link
            to=''
            className='bs-medium'>69a368</Link>
         <br />
         <span className='font-small'>
            <span className='bs-medium'>Completed </span>
            2 hrs ago
         </span>
      </Grid.Column>
   </Grid.Row>
)


class TransactionRowMain extends Component {
   state = {
      showSub: false,
   }

   toggleShowSub = (index) => {
      this.props.type === 5
         ? this.props.history.push({
            pathname: `/contract/studio-znshwhk6i`,
         })
         : this.setState({
            showSub: !this.state.showSub
         })
   }

   render() {
      const { transaction, i, toggleShowSub, type, filterTypes } = this.props

      const image = type
         ? filterTypes[type].img
         : filterTypes[i % filterTypes.length].img


      return (
         <Fragment>
            <TransactionRowType iconImage={image} showSub={this.state.showSub} toggleShowSub={this.toggleShowSub} i={i} transaction={transaction} />

            <Grid.Row columns={1} verticalAlign='middle' className={`transaction-row-sub border-top-light ${this.state.showSub ? '' : 'hide'}`}>
               <Grid.Column>
                  <Grid columns={1} className={`${i && 'border-top'} border-bottom transaction-row-sub-grid`} >
                     <Grid columns={2} className='border-left-bold transaction-row-sub-grid-2'>
                        {transaction.body && transaction.body.length && transaction.body.map((t, j) => (
                           <TransactionRowMain xkey={`${this.props.xkey}${j}`} key={`${this.props.xkey}${j}`} filterTypes={filterTypes} transaction={t} i={j} toggleShowSub={toggleShowSub} />
                        ))}
                     </Grid>
                  </Grid>
               </Grid.Column>
            </Grid.Row>
         </Fragment>
      )
   }
}

export default TransactionRowMain = withRouter(TransactionRowMain)