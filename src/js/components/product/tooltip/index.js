import React from 'react';

class ToolTip extends React.Component {

    constructor( props ) {
        super( props );

        this.remaining = this.remaining.bind( this );
    }

    remaining() {
        return this.props.total - this.props.current;
    }

    render() {

        return (
            <div className="tooltip">
                <div className="tooltip-inner">
                    ${this.remaining()} still needed for this project
                </div>
            </div>
        );
    }
}

export default ToolTip;
