import React, { Component, Fragment } from 'react'
import {
   withRouter,
} from 'react-router-dom'

import { getContractInfo } from '../../utils/api'

import MUserImage from '../../images/icon-m-user.svg'
import TransactionsImage from '../../images/icon-transactions.svg'
import TransactionFilter from '../../images/icon-m-filter.svg'
import TransactionTypeAcct from '../../images/icon-t-acct.svg'
import TransactionTypeTransfer from '../../images/icon-t-transfer.svg'
import TransactionTypeCall from '../../images/icon-t-call.svg'
import TransactionTypeStake from '../../images/icon-t-stake.svg'
import TransactionTypeContract from '../../images/icon-t-contract.svg'
import TransactionTypeKeySwap from '../../images/icon-t-key-swap.svg'
import TransactionTypeKeyNew from '../../images/icon-t-key-new.svg'
import TransactionTypeKeyDelete from '../../images/icon-t-key-delete.svg'
import MTransactionsImage from '../../images/icon-m-transaction.svg'
import MCopyImage from '../../images/icon-m-copy.svg'
import AccountImage from '../../images/icon-account.svg'

import PaginationBlock from '../pagination/PaginationBlock'
import TabBlock from '../common/TabBlock'
import TransactionRowMain from '../transactions/TransactionRowMain'

import {
   Container,
   Grid,
   Dimmer,
   Loader,
   Image,
   List,
} from 'semantic-ui-react'


import styled from 'styled-components'

const CodeBlockDiv = styled.div`
   margin-left: -1rem;
   margin-right: -1rem;

   .code-item {
      display: flex;
      min-height: 60px;
      border-bottom: 2px solid #e6e6e6;

      &-left {
         margin: 0 20px;

         img {
            width: 20px;
            margin: 20px 0 0 0;
         }
      }
      &-right {
         font-family: Source Code Pro;
         margin: 20px 0 20px 0;
         font-weight: 600;
      }
   }
   .code-item-bg {
      background: #f8f8f8;
      border-bottom: 0px solid #e6e6e6;
      
   }
`


class ContractDetail extends Component {
   state = {
      contract: {
         state: {

         }
      },
      loader: true,

      filterTypes: [
         { img: TransactionFilter, name: 'ALL' },
         { img: TransactionTypeAcct, name: 'CREATE ACCOUNT' },
         { img: TransactionTypeTransfer, name: 'TRANSFER' },
         { img: TransactionTypeCall, name: 'FUNCTION CALL' },
         { img: TransactionTypeStake, name: 'STAKE' },
         { img: TransactionTypeContract, name: 'DEPLOY CONTRACT' },
         { img: TransactionTypeKeySwap, name: 'SWAP KEY' },
         { img: TransactionTypeKeyNew, name: 'ADD KEY' },
         { img: TransactionTypeKeyDelete, name: 'DELETE KEY' },
         // { img: TransactionTypeAcct, name: 'ADD BLS KEY' },
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
      }),
   }

   updateContract(name) {
      getContractInfo(name).then(response => {
         this.setState({
            contract: response,
            loader: false,
         })
      }).catch((error) => {
         console.log(error)
         // this.props.history.push({
         //     pathname: '/error'
         // })
      })
   }

   componentDidMount() {
      this.updateContract(this.props.match.params.name)
   }

   componentDidUpdate(prevProps) {
      if (prevProps.match.params.name !== this.props.match.params.name) {
         this.updateContract(this.props.match.params.name)
      }
   }
   render() {
      const { contract, loader, filterTypes, transactionsX } = this.state
      const { state } = contract

      return (
         <Container>
            <Grid className='page-title'>
               <Grid.Column as='h1'>Contract: <span className="color-black"> @{this.props.match.params.name}</span></Grid.Column>
            </Grid>

            <Grid className='box block'>
               <Dimmer inverted active={loader}>
                  <Loader />
               </Dimmer>

               <Fragment>
                  <Grid.Row width={4} className='border-bottom'>
                     <Grid.Column computer={6} tablet={8} mobile={16} className='border-right'>
                        <h5><span className='balance-image'>Ⓝ </span>BALANCE</h5>
                        <List floated='left' horizontal>
                           <List.Item as='h2'>234,567<span className='balance-image-big'> Ⓝ</span></List.Item>
                           <List.Item as='h5'>(2,000,000 USD)</List.Item>
                        </List>
                     </Grid.Column>
                     <Grid.Column computer={4} tablet={8} mobile={16} className='border-right'>
                        <Image src={MTransactionsImage} align='left' className='icon-tiny' />
                        <h5>TRANSACTIONS</h5>
                        <h2>1,259,856</h2>
                     </Grid.Column>
                     <Grid.Column computer={5} tablet={8} mobile={16}>
                        <Image src={MUserImage} align='left' className='icon-tiny' />
                        <h5>CREATED BY</h5>
                        <h3 className='color-blue'>@vlad.near</h3>
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className='background-lg'>
                     <Grid.Column largeScreen={6} computer={5} tablet={8}>
                        <h5>CREATED</h5>
                        <h3>March 20, 2019 at 5:34:09pm</h3>
                     </Grid.Column>
                     <Grid.Column largeScreen={10} computer={11} tablet={8}>
                        <h5>ADDRESS</h5>
                        <List floated='left' horizontal>
                           <List.Item as='h3'>TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9</List.Item>
                           <List.Item ><Image src={MCopyImage} className='copy-image' /></List.Item>
                        </List>
                     </Grid.Column>
                  </Grid.Row>

                  {Object.keys(state).map((key, i) => (
                     <Grid.Row key={`key-${i}`} className='background-lg border-top'>
                        <Grid.Column computer={10} tablet={10}>
                           <h6>KEY</h6>
                           <List floated='left' horizontal>
                              <List.Item as='h3'>{key}</List.Item>
                              <List.Item ><Image src={MCopyImage} className='copy-image' /></List.Item>
                           </List>
                        </Grid.Column>
                        <Grid.Column computer={6} tablet={6}>
                           <h6>VALUE</h6>
                           <h3>{state[key]}</h3>
                        </Grid.Column>
                     </Grid.Row>
                  ))}
               </Fragment>
            </Grid>

            <TabBlock>
               <div label='Transactions' labelImg={TransactionsImage}>
                  <PaginationBlock
                     filterTypes={filterTypes}
                  >
                     {transactionsX.map((transaction, i) => (
                        <TransactionRowMain
                           key={i}
                           xkey={i}
                           transaction={transaction}
                           i={i}
                           filterTypes={filterTypes}
                           type=''
                        />
                     ))}
                  </PaginationBlock>
               </div>
               <div label='Code' labelImg={AccountImage}>
                  <CodeBlockDiv>
                     <div className='code-item'>
                        <div className='code-item-left'>
                           <img src={TransactionTypeContract} />
                        </div>
                        <div className='code-item-right'>
                           Contract ABI
                        </div>
                     </div>
                     <div className='code-item code-item-bg'>
                        <div className='code-item-left'>
                           <img src={MCopyImage} />
                        </div>
                        <div className='code-item-right color-blue'>
                           Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </div>
                     </div>
                     <div className='code-item'>
                        <div className='code-item-left'>
                           <img src={TransactionTypeCall} />
                        </div>
                        <div className='code-item-right'>
                           Byte Code
                        </div>
                     </div>
                     <div className='code-item code-item-bg'>
                        <div className='code-item-left'>
                           <img src={MCopyImage} />
                        </div>
                        <div className='code-item-right color-blue'>
                           Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </div>
                     </div>
                  </CodeBlockDiv>
               </div>
            </TabBlock>
         </Container>
      )
   }
}

export const ContractDetailWithRouter = withRouter(ContractDetail)