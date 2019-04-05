import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const TabBlockDiv = styled.div`
   margin: 20px 0 0 0;
   border-radius: 5px;

   margin-left: -1rem;
   margin-right: -1rem;

   .tab-items {
      display: flex;
      height: 74px;
      border-bottom: 4px solid #e6e6e6;
      border-radius: 5px;
   }

   .tab-item {
      height: 74px;
      padding: 0 24px;

      border: 4px solid transparent;
      border-bottom: 4px solid #e6e6e6;

      border-radius: 5px;
      cursor: pointer;
   }
   .tab-item h2 {
      line-height: 60px;
   }
   .tab-item img {
      margin: 17px 10px 0 0;
      width: 26px;
   }
   .tab-item-active {
      border: 4px solid #e6e6e6;
      border-bottom: 4px solid #fff;
   }
   .tab-content {
      margin: 10px 0 0 0;
      margin-left: 1rem;
      margin-right: 1rem;
   }
`


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
            <TabBlockDiv className=''>
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
            </TabBlockDiv>
         </Fragment>
      )
   }
}

export default TabBlock