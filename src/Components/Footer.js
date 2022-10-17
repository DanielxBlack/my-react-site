import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>Template by <a title="Tim Baker" href="https://github.com/tbakerx/react-resume-template">Tim Baker</a></li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
              <li>Glitch effects created in <a title="PhotoMosh" href="https://photomosh.com/">PhotoMosh</a></li>
              <li>Visit the <a title="Old site" href="https://danielxblack.github.io/">Old site</a></li>
              <li>Party like it's <a title="1998" href="https://danielxblack.github.io/pages/retroweb.html">1998</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
