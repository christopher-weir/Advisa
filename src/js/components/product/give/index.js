import React from 'react';

class Give extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            amount: '',
            disabled: true
        };

        this.validateInput = this.validateInput.bind( this );
        this.updateTotal = this.updateTotal.bind( this );
    }


    /**
     * validate the input.
     * First only update the view if it is a number
     * Set the current state
     */
    validateInput( e ) {

        // convert the input to a number
        const val = Number( e.target.value );

        // if the val is a valid integer
        // set that as the current value
        // also check for negative numbers
        if( Number.isInteger( val ) && val > 0 ) {
            this.setState( {
                amount: val,
                disabled: false
            } );
        }

        // if the value is 0
        // set to empty
        if( val === 0 ) {
            this.setState( {
                amount: '',
                disabled: true
            } );
        }
    }


    /**
     * Update the app total and reset the component
     */
    updateTotal() {

        this.props.updateTotal( this.state.amount );

        // unfocus the input
        this.refs.amount.blur();

        // reset the input
        this.setState( {
            amount: '',
            disabled: true
        } );
    }


    render() {

        return (
            <div className="give-wrap">
                <form onSubmit={this.updateTotal}>
                    <input
                        type="text"
                        ref="amount"
                        value={this.state.amount}
                        onChange={this.validateInput} />

                    <button
                        type="submit"
                        onClick={this.updateTotal}
                        disabled={this.state.disabled}>
                        Give Now
                    </button>
                </form>
            </div>
        );
    }
}

export default Give;
