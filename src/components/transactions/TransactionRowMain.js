import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
   withRouter,
   Link,
} from 'react-router-dom'

import {
   Grid,
   Image,
} from 'semantic-ui-react'

import ArrowDown from '../../images/icon-arrow-down.svg'
import ArrowRight from '../../images/icon-arrow-right.svg'

import styled from 'styled-components'

const MainGridRow = styled(Grid.Row)`
   &&& .col-image {
      width: 90px;
      padding-left: 0px;
      padding-right: 0px;
      position: relative;
      flex: 0 0 90px;
   
      .main-image img {
         width: 18px;
         margin: ${props => props.dashboard ? '0 0 0 0;' : '0 24px 0 18px;'}
      }

      .dropdown-image-down {
         width: 20px;
         top: 4px;
         left: -6px;
         cursor: pointer;
      }
      .dropdown-image-right {
         width: 10px;
         margin: 0 0 0 0;
         cursor: pointer;
      }
   }

   ${props => props.dashboard && `
      margin-left: 20px;
      border-left: 4px solid #e6e6e6;

      &&& .col-image {
         margin-left: -33px;
         width: 40px;
         flex: 0 0 40px;

         .main-image {
            border: 1px solid #e6e6e6;
            background: #fff;
            border-radius: 14px;
            padding: 6px;
            width: 26px;
            height: 26px;
            margin: 0 24px 0 18px;

            img {
               width: 18px;
               margin: 0 0 0 0;
            }
         }
      }

      && .dropdown-image {
         display: none;
      }
   `}

   .main-row-title {
      font-weight: 500;
      width: auto;
      padding-left: 0px;
      padding-right: 0px;
      flex: 1;
   }

`

const SubGridRow = styled(Grid.Row)`
   .transaction-row-sub-grid {
      background: #f8f8f8;
      min-height: 58px;
   }
   .transaction-row-sub-grid-2 {
      padding: 0px 0 0 10px;
      margin: 0 0 0 24px;
   }
`


export const TransactionRowType = ({ toggleShowSub, i, transaction, showSub, iconImage, dashboard }) => (
   <MainGridRow
      verticalAlign='middle'
      className='border-bottom-light main-row'
      dashboard={dashboard}

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
   </MainGridRow>
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
      const { transaction, i, toggleShowSub, type, filterTypes, dashboard } = this.props

      const image = type
         ? filterTypes[type].img
         : filterTypes[i % filterTypes.length].img


      return (
         <Fragment>
            <TransactionRowType dashboard={dashboard} iconImage={image} showSub={this.state.showSub} toggleShowSub={this.toggleShowSub} i={i} transaction={transaction} />

            <SubGridRow columns={1} verticalAlign='middle' className={`transaction-row-sub border-top-light ${this.state.showSub ? '' : 'hide'}`}>
               <Grid.Column>
                  <Grid columns={1} className={`${i && 'border-top'} border-bottom transaction-row-sub-grid`} >
                     <Grid columns={2} className='border-left-bold transaction-row-sub-grid-2'>
                        {transaction.body && transaction.body.length && transaction.body.map((t, j) => (
                           <TransactionRowMain xkey={`${this.props.xkey}${j}`} key={`${this.props.xkey}${j}`} filterTypes={filterTypes} transaction={t} i={j} toggleShowSub={toggleShowSub} />
                        ))}
                     </Grid>
                  </Grid>
               </Grid.Column>
            </SubGridRow>
         </Fragment>
      )
   }
}

export default TransactionRowMain = withRouter(TransactionRowMain)