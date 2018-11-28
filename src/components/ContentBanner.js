import React, { Component } from "react";

class ContentBanner extends Component {
    render() {
        return (
            <div class="banner">
                <div class="banner-content">
                    <h3>recommended content</h3>
                    <h1>Rephrasing negative thoughts</h1>
                    <p>{this.props.change}</p>
                </div>
            </div>
        );
    }
}

export default ContentBanner;