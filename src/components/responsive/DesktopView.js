import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
   Link,
   NavLink,
} from 'react-router-dom'

import {
   Image,
   Menu,
   Responsive,
   Segment,
   Visibility,
} from 'semantic-ui-react'

import LogoImage from '../../images/explorer.png'
import BlocksImage from '../../images/icon-blocks.svg'
import TransactionsImage from '../../images/icon-transactions.svg'
import HelpImage from '../../images/icon-help.svg'
import IssuesImage from '../../images/icon-issues.svg'
import AccountImage from '../../images/icon-account.svg'
import ShardImage from '../../images/icon-shard.svg'
import ContractsImage from '../../images/icon-contract.svg'

import styled from 'styled-components'

const CustomResponsive = styled(Responsive)`
   .spacer {
      height: 72px;
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

      .item {
         color: white;
         font-family: "benton-sans",sans-serif !important;
         font-weight: 400;
         font-size: 14px;
         padding-left: 0px;
         padding-right: 30px;
         letter-spacing: 2px;

         .mainlogo {
            width: 220px !important;
         }
      }

      a.item:hover {
         color: #6ad1e3 !important;
      }

      .hover.item {
         color: #6ad1e3 !important;
      }

      .item:hover {
         color: #999999!important;
      }
   }
`


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
         <CustomResponsive
            getWidth={getWidth}
            minWidth={Responsive.onlyComputer.minWidth}
         >
            <Visibility
               once={false}
               onBottomPassed={this.showFixedMenu}
               onBottomPassedReverse={this.hideFixedMenu}
            >
               <Segment className='spacer' basic></Segment>
               <Menu
                  className='navbar'
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
                     <Image className="navbar-icon" src={HomeImage} />
                     HOME
                  </Menu.Item> */}
                  <Menu.Item
                     name='beaconChain'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/contracts'
                  >
                     <Image className="navbar-icon" src={ContractsImage} />
                     CONTRACTS
                  </Menu.Item>
                  <Menu.Item
                     name='beaconChain'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/transactions'
                  >
                     <Image className="navbar-icon" src={TransactionsImage} />
                     TRANSACTIONS
                  </Menu.Item>
                  <Menu.Item
                     name='beaconChain'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/beacon-chain'
                  >
                     <Image className="navbar-icon" src={BlocksImage} />
                     BLOCKS
                  </Menu.Item>
                  <Menu.Item
                     name='beaconChain'
                     activeClassName='hover'
                     onClick={this.handleItemClick}
                     as={NavLink}
                     to='/shard-chain'
                  >
                     <Image className="navbar-icon" src={ShardImage} />
                     SHARD
                  </Menu.Item>
                  <Menu.Menu position='right'>
                     <Menu.Item
                        as='a'
                        href='http://near.chat/'
                        target='_blank'
                     >
                        <Image className="navbar-icon" src={HelpImage} />
                        {/* HELP */}
                     </Menu.Item>
                     <Menu.Item
                        as='a'
                        href='https://github.com/nearprotocol/debugger/issues'
                        target='_blank'
                     >
                        <Image className="navbar-icon" src={IssuesImage} />
                        {/* ISSUES */}
                     </Menu.Item>
                     <Menu.Item
                        name='beaconChain'
                        activeClassName='hover'
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to='/account'
                     >
                        <Image className="navbar-icon" src={AccountImage} />
                        ACCOUNT
                     </Menu.Item>
                  </Menu.Menu>
               </Menu>
            </Visibility>
            {this.props.children}
         </CustomResponsive>
      )
   }
}

export default DesktopView