/*
 * Reveal React Component
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React, { Component, PropTypes } from 'react';

const
  propTypes = {
    effect: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    onReveal: PropTypes.func,
    children: PropTypes.node.isRequired,
  },
  defaultProps = {
    className: '',
    style: {},
  };

function getAbsoluteOffsetTop({ offsetTop, offsetParent }) {
  return offsetTop + (offsetParent && getAbsoluteOffsetTop(offsetParent));
}

class Reveal extends Component{
  constructor(props){
    super(props);
    this.state={
      isHidden: false,
      isMounted: false,
    };
    this.handleScroll=this.handleScroll.bind(this);
  }
  handleScroll(){
    console.log(getAbsoluteOffsetTop(this.refs.el));
    if (window.pageYOffset + window.innerHeight*0.85 > getAbsoluteOffsetTop(this.refs.el)) {
        //console.log("handle scroll!");

        this.setState({ isHidden: false });
      this.componentWillUnmount();
      if (typeof this.props.onReveal === 'function')
        this.props.onReveal();
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount(){
    if (!this.props.effect) return;
    console.log("onmount: "+getAbsoluteOffsetTop(this.refs.el));
    if (window.pageYOffset + window.innerHeight > getAbsoluteOffsetTop(this.refs.el)) {
      // this.setState({ isHidden: false, isMounted: true });
      //return;
    }
    this.setState({ isHidden: true, isMounted: true });
    window.setTimeout(this.handleScroll, 150);
    window.addEventListener('scroll', this.handleScroll);
  }

  render(){
    //const { effect, style, className, onReveal, ...props } = this.props;
    

    let animation = '', s={};
    if (this.props.effect) {
      if (this.state.isHidden)
        s.visibility = 'hidden';
      else if (this.state.isMounted)
        animation = ( this.props.className ? ' ' :'') + this.props.effect;
    }

    const rest = Object.assign({}, this.props);
    delete rest.effect;
    delete rest.style;
    delete rest.className;
    delete rest.onReveal;

   
    return(
      <div { ...rest } style={this.props.style,s} className={ this.props.className + animation } ref="el" />
    );
  }

}

Reveal.propTypes = propTypes;
Reveal.defaultProps = defaultProps;
export default Reveal;
