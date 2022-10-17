import React, { Component } from 'react';

class Shouts extends Component {
  render() {

    if(this.props.data){
      var shouts = this.props.data.shouts.map(function(shouts){
        return  <li key={shouts.user}>
            <blockquote>
               <p>{shouts.text}</p>
               <cite>{shouts.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="shouts">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Shouts</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {shouts}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Shouts;
