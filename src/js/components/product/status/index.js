import React from 'react';

class Status extends React.Component {


    /**
     * pluralise the copy according to the amount of doners
     */
    pluralise( _doners ) {
        return ( _doners > 1 ) ? 's' : '';
    }


    render() {

        // set the default message
        let message = <p>Be the first to donate.</p>;

        // if there is a current amount update the message to reflect that
        if( this.props.current > 0 ) {
            message = <p>
                Join the&nbsp;
                <strong>{this.props.doners}</strong>
                &nbsp;other doner{this.pluralise( this.props.doners )} who have donated&nbsp;
                <strong>${this.props.current}</strong>.
            </p>;
        }

        return (
            <div className="status-wrap">
                <p>
                    <strong><span>Only 3 days left</span></strong> to fund this project.
                </p>

                { message }

            </div>
        );
    }
}

export default Status;
