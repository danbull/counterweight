import React, { Component } from "react";

class Editorial extends Component {

  render() {
    return (
      <article className="bg-white ba b--black-10 mv4">
        <div className="pv2 ph3">
          <h1 className="f6 ttu tracked">Editorial #1</h1>
        </div>
        <img
          src="https://s.doctoroz.com/styles/720x480/s3/sites/default/files/media/image_thumb/ParadeDiabetes_MEDIA.jpg?itok=NSLtgq-u"
          className="w-100 db"
          alt=""
        />
        <div className="pa3">
          <a href="#" className="link dim lh-title">
            Editorial #1
          </a>
          <small className="gray db pv2">
            Showing because: <span>You just started phase 2</span>
          </small>
        </div>
      </article>
    );
  }
}

export default Editorial;
