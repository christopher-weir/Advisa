import React from 'react';

class Progress extends React.Component {


    /**
     * Return the % of the current total progress
     */
    currentProgress() {

        const percentage = Math.round( this.props.current / this.props.total * 100 );

        // limit it to 100%
        return ( percentage > 100 ) ? 100 : percentage;
    }


    render() {

        const progressStyle = {
            width: this.currentProgress() + '%',
            backgroundColor: ( this.props.current >= this.props.total ) ? '#09b30e' : '#eb603c'
        };

        return (
            <div className="progress-background">
                <div className="progress-bar" style={progressStyle}>
                </div>
            </div>
        );
    }
}

export default Progress;
