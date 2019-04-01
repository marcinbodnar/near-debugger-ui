import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
   Link,
   NavLink,
} from 'react-router-dom'

import '../index.css'

import {
   Image,
   Menu,
   Responsive,
   Segment,
   Visibility,
} from 'semantic-ui-react'

import LogoImage from '../images/explorer.png'
import HomeImage from '../images/icon-home.svg'
import BlocksImage from '../images/icon-blocks.svg'
import TransactionsImage from '../images/icon-transactions.svg'
import HelpImage from '../images/icon-help.svg'
import IssuesImage from '../images/icon-issues.svg'
import AccountImage from '../images/icon-account.svg'
import ShardImage from '../images/icon-shard.svg'
import ContractsImage from '../images/icon-contract.svg'



const getWidth = () => {
   const isSSR = typeof window === 'undefined'
   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopView extends Component {
   static propTypes = {
      children: PropTypes.node,
   }

   static defaultProps = {
      children: '',
   }

   state = {
      fixed: false,
      activeItem: 'home',
   }

   hideFixedMenu = () => this.setState({ fixed: false })

   showFixedMenu = () => this.setState({ fixed: true })

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   render() {
      const { fixed } = this.state

      return (
         <Responsive
            getWidth={getWidth}
            minWidth={Responsive.onlyComputer.minWidth}
         >
            <Visibility
               once={false}
               onBottomPassed={this.showFixedMenu}
               onBottomPassedReverse={this.hideFixedMenu}
            >
               <Segment className='Navbar-d' basic></Segment>
               <Menu
                  className='Navbar'
                  // fixed={fixed ? 'top' : null}
                  fixed='top'
                  pointing={!fixed}
                  borderless
                  size='large'
               >
                  <Menu.Item
                     as={Link}
                     to='/'
                  >
                     <Image className='mainlogo' src={LogoImage} />
                  </Menu.Item>
                  {/* <Menu.Item
                     name='home'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/'
                     exact
                  >
                     <Image className="Navbar-icon" src={HomeImage} />
                     HOME
                  </Menu.Item> */}
                  <Menu.Item
                     name='beaconChain'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/contracts'
                  >
                     <Image className="Navbar-icon" src={ContractsImage} />
                     CONTRACTS
                  </Menu.Item>
                  <Menu.Item
                     name='beaconChain'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/transactions'
                  >
                     <Image className="Navbar-icon" src={TransactionsImage} />
                     TRANSACTIONS
                  </Menu.Item>
                  <Menu.Item
                     name='beaconChain'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/beacon-chain'
                  >
                     <Image className="Navbar-icon" src={BlocksImage} />
                     BLOCKS
                  </Menu.Item>
                  <Menu.Item
                     name='beaconChain'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/shard-chain'
                  >
                     <Image className="Navbar-icon" src={ShardImage} />
                     SHARD
                  </Menu.Item>
                  {/* <Menu.Item
                     name='beaconChain'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/accounts'
                  >
                     <Image className="Navbar-icon" src={AccountImage} />
                     ACCOUNTS
                  </Menu.Item> */}
                  <Menu.Menu position='right'>
                     <Menu.Item
                        as='a'
                        href='http://near.chat/'
                        target='_blank'
                     >
                        <Image className="Navbar-icon" src={HelpImage} />
                        {/* HELP */}
                     </Menu.Item>
                     <Menu.Item
                        as='a'
                        href='https://github.com/nearprotocol/debugger/issues'
                        target='_blank'
                     >
                        <Image className="Navbar-icon" src={IssuesImage} />
                        {/* ISSUES */}
                     </Menu.Item>
                     <Menu.Item
                        name='beaconChain'
                        activeClassName='hover'
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to='/account'
                     >
                        <Image className="Navbar-icon" src={AccountImage} />
                        ACCOUNT
                     </Menu.Item>
                  </Menu.Menu>
               </Menu>
            </Visibility>
            {this.props.children}
         </Responsive>
      )
   }
}

export default DesktopView