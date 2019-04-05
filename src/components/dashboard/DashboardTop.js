import React, { Component, Fragment } from 'react'
import {
   Link,
} from 'react-router-dom'

import { listBeaconBlocks } from '../../utils/api'

import {
   Grid,
   Image,
} from 'semantic-ui-react'

import MHeightImage from '../../images/icon-m-height.svg'
import MTpsImage from '../../images/icon-m-tps.svg'
import MUserImage from '../../images/icon-m-user.svg'
import MTransactionsImage from '../../images/icon-m-transaction.svg'
import MNodeOnlineImage from '../../images/icon-m-node-online.svg'


const DashboardTop = ({blockHeight, children}) => (
   <Grid className='box block'>
      <Grid.Column computer={4} tablet={8} mobile={16} className='border-right'>
         <Image src={MNodeOnlineImage} className='icon-tiny' />
         <h5>NODES ONLINE</h5>
         <h2>1162<span className='color-brown-grey'>/2356</span></h2>
      </Grid.Column>
      <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
         <Image src={MHeightImage} className='icon-tiny' />
         <h5>BLOCK HEIGHT</h5>
         <h2>{blockHeight.toLocaleString()}</h2>
      </Grid.Column>
      <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
         <Image src={MTpsImage} className='icon-tiny' />
         <h5>TPS/MAX</h5>
         <h2>27/748</h2>
      </Grid.Column>
      <Grid.Column computer={3} tablet={8} mobile={16} className='border-right'>
         <Image src={MTransactionsImage} className='icon-tiny' />
         <h5>LAST DAY TX</h5>
         <h2>2,477,500</h2>
      </Grid.Column>
      <Grid.Column computer={3} tablet={8} mobile={16}>
         <Image src={MUserImage} className='icon-tiny' />
         <h5>ACCOUNTS</h5>
         <Link
            className='h2'
            to='/accounts'
         >2,113,478</Link>
      </Grid.Column>
   </Grid>
)

export default DashboardTop