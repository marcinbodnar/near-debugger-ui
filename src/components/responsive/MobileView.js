import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
   Link,
} from 'react-router-dom'

// import '../index.css'

import {
   Header,
   Image,
   Menu,
   Responsive,
   Segment,
   Sidebar,
} from 'semantic-ui-react'

import LogoImage from '../../images/explorer.png'
import HomeImage from '../../images/icon-home.svg'
import BlocksImage from '../../images/icon-blocks.svg'
import TransactionsImage from '../../images/icon-transactions.svg'
import HelpImage from '../../images/icon-help.svg'
import IssuesImage from '../../images/icon-issues.svg'
import AccountImage from '../../images/icon-account.svg'
import ContactsImage from '../../images/icon-contacts.svg'
import SidebarImage from '../../images/sidebar.png'
import ShardImage from '../../images/icon-shard.svg'
import ContractsImage from '../../images/icon-contract.svg'



import styled from 'styled-components'

const CustomResponsive = styled(Responsive)`
   min-height: 100vh;
   position: static;

   .sidebar.menu {
      min-height: 100vh;
   }

   .sidebar.menu .item {
      background: #24272a;

      color: white;
      font-family: "benton-sans",sans-serif;
      font-weight: 400;
      font-size: 14px;
      padding: 20px 20px;
      border-bottom: 1px solid #363b3e;
   }

   && .sidebar-mobile {
      background: #111314;
   }

   .sidebar-mobile-header {
      height: 72px;
      padding: 0px 0 0 20px;
      margin: 0px;
      line-height: 72px;
      color: #fff;
      font-size: 14px;
   }

   &&&& .sidebar-mobile-submenu {
      .header {
         font-size: 12px;
         color: #999;
         margin: 0;
      }

      a {
         color: #6ad1e3;
         padding-left: 20px;
         font-size: 14px;
      }

      & > .menu {
         a {
            border-bottom: 0px solid #363b3e;
            padding: 10px 20px;
         }
      }
   }

   .pusher .pusher-image {
      padding-right: 0;
   }

   .navbar {
      background-color: #24272a;
      height: 72px;
      border-radius: 0;
      margin-bottom: 25px;

      &-icon {
         height: 24px;
         margin-right: 14px;
         display: inline-block !important;
      }

      .mainlogo {
         width: 220px !important;
      }
   }

   .header.item {
      width: 215px;
      padding: 0;
   }
`


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
         <CustomResponsive
            getWidth={getWidth}
            maxWidth={Responsive.onlyTablet.maxWidth}
         >
            <Sidebar.Pushable
               
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
                     <Image className="navbar-icon" src={HomeImage} />
                     HOME
                  </Menu.Item>
                  <Menu.Item
                     as={Link}
                     to='/beacon-chain'
                     onClick={this.handleSidebarHide}
                  >
                     <Image className="navbar-icon" src={BlocksImage} />
                     BLOCKS
                  </Menu.Item>
                  <Menu.Item
                     as={Link}
                     to='/shard-chain'
                     onClick={this.handleSidebarHide}
                  >
                     <Image className="navbar-icon" src={ShardImage} />
                     SHARD
                  </Menu.Item>
                  <Menu.Item
                     as={Link}
                     to='/transactions'
                     onClick={this.handleSidebarHide}
                  >
                     <Image className="navbar-icon" src={TransactionsImage} />
                     TRANSACTIONS
                  </Menu.Item>
                  <Menu.Item
                     as={Link}
                     to='/contracts'
                     onClick={this.handleSidebarHide}
                  >
                     <Image className="navbar-icon" src={ContractsImage} />
                     CONTRACTS
                  </Menu.Item>
                  <Menu.Item
                     as='a'
                     href='http://near.chat/'
                     target='_blank'
                  >
                     <Image className="navbar-icon" src={HelpImage} />
                     HELP
                  </Menu.Item>
                  <Menu.Item
                     as='a'
                     href='https://github.com/nearprotocol/debugger/issues'
                     target='_blank'
                  >
                     <Image className="navbar-icon" src={IssuesImage} />
                     ISSUES
                  </Menu.Item>
                  <Menu.Item className='sidebar-mobile-submenu'>
                     <Header>
                        MANAGE ACCOUNT
                     </Header>
                     <Menu.Menu className='Sidebar-submenu'>
                        <Menu.Item as='a'>
                           <Image className="navbar-icon" src={AccountImage} />
                           Profile
                        </Menu.Item>
                        <Menu.Item as='a'>
                           <Image className="navbar-icon" src={ContactsImage} />
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
                        className='navbar'
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
                              <Image className="navbar-icon" src={SidebarImage} align='right' />
                           </Menu.Item>
                        </Menu.Menu>
                     </Menu>
                  </Segment>

                  {this.props.children}
                  
               </Sidebar.Pusher>
            </Sidebar.Pushable>
         </CustomResponsive>
      )
   }
}

export default MobileView