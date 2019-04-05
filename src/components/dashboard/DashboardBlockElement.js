import React, { Component, Fragment } from 'react'
import {
   Link,
} from 'react-router-dom'

import {
   Grid,
   Image,
} from 'semantic-ui-react'

import MHeightImage from '../../images/icon-m-height.svg'
import MUserImage from '../../images/icon-m-user.svg'
import MTransactionsImage from '../../images/icon-m-transaction.svg'

import styled from 'styled-components'

const BlockGrid = styled(Grid)`
   &&& {
      border: 4px solid #e6e6e6;
      border-radius: 8px;
      margin: 4px 0px;
      padding: 0px;
      min-height: 150px;

      .column {
         padding-left: 10px;
         padding-right: 10px;
      }

      .details {
         padding-top: 8px;
      }

      img {
         margin: 2px 6px 0 0;
         width: 12px;
         float: left;
      }
      .row {
         padding-top: 8px;
         padding-bottom: 8px;
      }
   }

   :hover {
      text-decoration: none;
      border: 4px solid #6ad1e3;
   }
`


const DashboardBlockElement = ({ block }) => (
   <Grid.Column className='block-element' width={8}>
      <BlockGrid columns={1} stackable>
         <Grid.Row>
            <Grid.Column 
               to={`/beacon-block/${block.index}`}
               as={Link} 
               className='h3'
            >

               #{block.index}
            </Grid.Column>
            <Grid.Column className='color-brown-grey details'>
               <Image src={MHeightImage} />
               254
            </Grid.Column>
            <Grid.Column className='color-brown-grey'>
               <Image src={MTransactionsImage} />
               15489
            </Grid.Column>
            <Grid.Column className='color-brown-grey'>
               <Image src={MUserImage} />
               @vlad.near
            </Grid.Column>
         </Grid.Row>
         <Grid.Row>
            <Grid.Column  
               as={Link}
               to=''
               computer={9} 
               tablet={16} 
               className='bs-medium'
            >
               69a3a68...
            </Grid.Column>
            <Grid.Column className='font-small' textAlign='right' computer={7} tablet={16}>
               1h ago
            </Grid.Column>
         </Grid.Row>
      </BlockGrid>
   </Grid.Column>
)

export default DashboardBlockElement