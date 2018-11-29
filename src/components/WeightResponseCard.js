import React, { Component } from "react";
import '../WeightResponseCard.css'

class WeightResponseCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: 'https://sloanreview.mit.edu/content/uploads/2017/04/DL-Mukherjee-Digital-Leadership-Neutrality-Neutral-Culture-1200-300x300.jpg',
            title: 'Default',
            body: 'Some default text',
        };
    }

    setAppropriateContent(props){
        console.log("Changing content")
        let content; 

        if (this.props.weightChangeState === -1 ){
            content = {
                image: 'http://www.elmundodelpapelpintado.com/242540-large_default/confeti.jpg',
                title: 'Good work',
                body: "You are doing great. Lets take note of what went well this week, so that we can maintain this!",
            }
        } else if (this.props.weightChangeState === 1) {
            content = {
                image: 'http://media.istockphoto.com/vectors/huge-helping-hand-new-business-concept-vector-id530718785?k=6&m=530718785&s=612x612&w=0&h=pArbjjYryXf4eA0eSXBjrkEmWBZgEd3GnFioN0Lp8TU=',
                title: "Let's get back on track...",
                body: "In times like these, it's a good idea to take a step back and plan your next stap. Let's try out the 'Stop, Think, Learn, Plan'-module today!",
            }
        } else if (this.props.weightChangeState === 0){
            content = {
                image: 'https://www.itsnicethat.com/system/files/042018/5acc9beb7fa44ccc62000002/images_slice_large/SebastianCuri-WarriorPose-Illustration-itsnicethat-0.jpg?1523359320',
                title: "You are maintaining your weight",
                body: "Well done on not gaining any weight. How about setting a SMART goal to lose some weight this week?",
            }
        }

        this.setState((state,props) => (content));
    }

    componentWillReceiveProps() {
        this.setAppropriateContent();
    }

    closeResponseCard() {
        this.props.closeResponseCard();
    }

    render() {

        const style = this.props.show ? {} : {display: 'none'} ;

        return (
            <div style={style} className="card-container">
                <div className="response-card">
                    <img alt="description" src={this.state.image} className="response-image" />
                    <div className="card-title">
                        <h1>{this.state.title}</h1>
                    </div>
                    <div className="card-body">
                        {this.state.body}
                    </div>
                    <button className="button close-button" onClick={this.closeResponseCard.bind(this)}>Close</button>
                </div>
            </div>
        );
    }
}

export default WeightResponseCard;