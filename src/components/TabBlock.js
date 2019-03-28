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




class TabBlock extends Component {
   static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
   }

   state = {
      tabActive: this.props.children[0].props.label,
   }

   onClickTabItem = (label) => {
      console.log(label);

      this.setState({ tabActive: label });
   }


   render() {

      const { children } = this.props
      const { tabActive } = this.state


      return (
         <Fragment>
            <div className='tab-block'>
               <div className='tab-items'>
                  {children.map(({ props }) => (
                     <div
                        className={`tab-item ${props.label === tabActive ? 'tab-item-active' : null}`}
                        key={props.label}
                        label={props.label}
                        onClick={() => this.onClickTabItem(props.label)}
                     >
                        <h2>
                           <img src={props.labelImg} align='left' />
                           {props.label}
                        </h2>
                     </div>
                  ))}
               </div>
               <div className='tab-content'>
                  {children.map(({ props }) => props.label !== tabActive
                     ? null
                     : props.children
                  )}
               </div>
            </div>
         </Fragment>
      )
   }
}

export default TabBlock