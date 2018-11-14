import React, { Component } from "react";

class Editorial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="editorial-article bg-white ba b--black-10 mv4">
        <div className="pv2 ph3">
          <h1 className="f6 ttu tracked">{this.props.headline}</h1>
        </div>
        <img
          src={this.props.image}
          className="w-100 db"
          alt=""
        />
        <div className="pa3">
          <a href="#" className="link dim lh-title">
            {this.props.title}
          </a>
          <small className="gray db pv2">
            <span>Showing because:</span> {this.props.whyshow}
          </small>
        </div>
      </article>
    );
  }
}

export default Editorial;
