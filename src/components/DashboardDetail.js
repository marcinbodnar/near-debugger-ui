import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'

import { listBeaconBlocks } from '../utils/api'

import '../index.css'

import {
   Button,
   Container,
   Grid,
   Image,
   Segment,
   Header,
} from 'semantic-ui-react'

import TransactionsImage from '../images/icon-transactions.svg';

import BlocksList from './BlocksList'


class DashboardDetail extends Component {
   state = {
      blocks: [],
   }

   componentDidMount() {
      listBeaconBlocks().then(response => {
         this.setState({ blocks: response.data })
      }).catch((error) => {
         this.props.history.push({
            pathname: `/error`,
         })
      })
   }

   render() {
      const { blocks } = this.state

      return (
         <Fragment>
            <Segment style={{ padding: '0em 0 4em 0' }} vertical basic>
               <Container>
                  <h1>
                     Dashboard
                  </h1>
               </Container>
               <Container>
                  <Grid doubling columns={5} textAlign='center' className='dashboard-stats'>
                     <Grid.Row style={{ margin: '10px 0' }}>
                        <Grid.Column>
                           <h2>1162</h2>
                           Nodes Online
                        </Grid.Column>
                        <Grid.Column>
                           <h2>605495</h2>
                           Block Height
                        </Grid.Column>
                        <Grid.Column>
                           <h2>27/746</h2>
                           Current/Max TPS
                        </Grid.Column>
                        <Grid.Column>
                           <h2>24659812</h2>
                           Transactions Today
                        </Grid.Column>
                        <Grid.Column>
                           <h2>8246598</h2>
                           Total Accounts
                        </Grid.Column>
                     </Grid.Row>
                  </Grid>
               </Container>
            </Segment>

            <Container>
               <Grid columns='equal' stackable className='recentTB'>
                  <Grid.Row textAlign='center' style={{ paddingTop: '30px' }}>
                     <Grid.Column>
                        <Grid>
                           <Grid.Row>
                              <Grid.Column textAlign='left' width={11} style={{ padding: '0px' }}>
                                 <Header as='h2'>
                                    <Image className="column-icon" src={TransactionsImage} />
                                    Recent Transactions
                                 </Header>
                              </Grid.Column>
                              <Grid.Column textAlign='right' width={5} verticalAlign='middle'>
                                 <Button
                                    className='view-all'>
                                    VIEW ALL
                                    </Button>
                              </Grid.Column>
                           </Grid.Row>
                        </Grid>
                     </Grid.Column>
                     <Grid.Column>
                        <BlocksList blockType='beacon' recent={true} blocks={blocks} />
                     </Grid.Column>
                  </Grid.Row>
               </Grid>
            </Container>
         </Fragment>
      )
   }
}

export default DashboardDetail