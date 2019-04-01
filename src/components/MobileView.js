import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
   Link,
} from 'react-router-dom'

import '../index.css'

import {
   Header,
   Image,
   Menu,
   Responsive,
   Segment,
   Sidebar,
} from 'semantic-ui-react'

import LogoImage from '../images/explorer.png'
import HomeImage from '../images/icon-home.svg'
import BlocksImage from '../images/icon-blocks.svg'
import TransactionsImage from '../images/icon-transactions.svg'
import HelpImage from '../images/icon-help.svg'
import IssuesImage from '../images/icon-issues.svg'
import AccountImage from '../images/icon-account.svg'
import ContactsImage from '../images/icon-contacts.svg'
import SidebarImage from '../images/sidebar.png'
import ShardImage from '../images/icon-shard.svg'
import ContractsImage from '../images/icon-contract.svg'


const getWidth = () => {
   const isSSR = typeof window === 'undefined'
   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class MobileView extends Component {
   static propTypes = {
      children: PropTypes.node,
   }

   static defaultProps = {
      children: '',
   }

   state = {
      sidebarOpened: false
   }

   handleSidebarHide = () => this.setState({ sidebarOpened: false })

   handleToggle = () => this.setState({ sidebarOpened: true })

   render() {
      const { sidebarOpened } = this.state

      return (
         <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyTablet.maxWidth}
         >
            <Sidebar
               as={Menu}
               animation='push'
               onHide={this.handleSidebarHide}
               vertical
               visible={sidebarOpened}
               direction='right'
               className='sidebar-mobile'
            >
               <Header className='sidebar-mobile-header'>
                  @?
               </Header>
               <Menu.Item
                  as={Link}
                  to='/'
                  onClick={this.handleSidebarHide}
               >
                  <Image className="Navbar-icon" src={HomeImage} />
                  HOME
               </Menu.Item>
               <Menu.Item
                  as={Link}
                  to='/beacon-chain'
                  onClick={this.handleSidebarHide}
               >
                  <Image className="Navbar-icon" src={BlocksImage} />
                  BLOCKS
               </Menu.Item>
               <Menu.Item
                  as={Link}
                  to='/shard-chain'
                  onClick={this.handleSidebarHide}
               >
                  <Image className="Navbar-icon" src={ShardImage} />
                  SHARD
               </Menu.Item>
               <Menu.Item
                  as={Link}
                  to='/transactions'
                  onClick={this.handleSidebarHide}
               >
                  <Image className="Navbar-icon" src={TransactionsImage} />
                  TRANSACTIONS
               </Menu.Item>
               <Menu.Item
                  as={Link}
                  to='/contracts'
                  onClick={this.handleSidebarHide}
               >
                  <Image className="Navbar-icon" src={ContractsImage} />
                  CONTRACTS
               </Menu.Item>
               <Menu.Item
                  as='a'
                  href='http://near.chat/'
                  target='_blank'
               >
                  <Image className="Navbar-icon" src={HelpImage} />
                  HELP
               </Menu.Item>
               <Menu.Item
                  as='a'
                  href='https://github.com/nearprotocol/debugger/issues'
                  target='_blank'
               >
                  <Image className="Navbar-icon" src={IssuesImage} />
                  ISSUES
               </Menu.Item>
               <Menu.Item className='sidebar-mobile-submenu'>
                  <Header>
                     MANAGE ACCOUNT
                  </Header>
                  <Menu.Menu className='Sidebar-submenu'>
                     <Menu.Item as='a'>
                        <Image className="Navbar-icon" src={AccountImage} />
                        Profile
                     </Menu.Item>
                     <Menu.Item as='a'>
                        <Image className="Navbar-icon" src={ContactsImage} />
                        Contacts
                     </Menu.Item>
                  </Menu.Menu>
               </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
               <Segment
                  inverted
                  textAlign='center'
                  vertical
               >
                  <Menu
                     className='Navbar'
                     // fixed={fixed ? 'top' : null}
                     fixed='top'
                     borderless
                     size='large'
                  >
                     <Menu.Item as='a'>
                        <Image className='mainlogo' src={LogoImage} />
                     </Menu.Item>
                     <Menu.Menu position='right'>
                        <Menu.Item className='pusher-image' onClick={this.handleToggle} >
                           <Image className="Navbar-icon" src={SidebarImage} align='right' />
                        </Menu.Item>
                     </Menu.Menu>
                  </Menu>
               </Segment>
               {this.props.children}
            </Sidebar.Pusher>
         </Responsive>
      )
   }
}

export default MobileView