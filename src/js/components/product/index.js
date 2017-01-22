import React from 'react';
import Progress from './progress'; // eslint-disable-line no-unused-vars
import Status from './status'; // eslint-disable-line no-unused-vars
import Give from './give'; // eslint-disable-line no-unused-vars
import ToolTip from './tooltip'; // eslint-disable-line no-unused-vars

class Product extends React.Component {

    constructor( props ) {
        // access props
        super( props );

        // set initial state
        this.state = {
            title: this.props.title,
            total: this.props.total,
            hero: this.props.hero,
            doners: 0,
            current: 0
        };

        this.updateTotal = this.updateTotal.bind( this );
    }

    updateTotal( _total ) {

        const current = this.state.current + _total;
        const doners = this.state.doners + 1;

        this.setState( {
            current: current,
            doners: doners
        } );
    }

    render() {

        let _tooltip = null;

        // if there is still a remaining amount add the tooltip
        if( ( this.state.total - this.state.current ) > 0 ) {
            _tooltip = <ToolTip
                total={this.state.total}
                current={this.state.current}/>;
        }

        return (
            <div className="product-wrap">

                <div className="product-info">
                    <img
                        className="hero-image"
                        src={this.state.hero} />
                    <h2>
                        {this.state.title}
                    </h2>
                </div>

                { _tooltip }

                <div className="product-meta">
                    <Progress
                        total={this.state.total}
                        current={this.state.current}/>

                    <Status
                        total={this.state.total}
                        doners={this.state.doners}
                        current={this.state.current} />

                    <Give
                        updateTotal={this.updateTotal}/>
                </div>
            </div>
        );
    }
}

export default Product;
