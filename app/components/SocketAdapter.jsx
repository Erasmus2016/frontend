import Component from 'react-pure-render/component';
import { PropTypes } from 'react';
import { connect } from 'react-redux';

export default class SockerAdapter extends Component {

    static propTypes = {
      endpoint: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    };

    static childContextTypes = {
      emit: PropTypes.func
    };

    constructor(props) {
        //this.socket = io.connect(this.props.endpoint);
        super(props);
        this.socket = {
            emit: (event, payload) => console.log(event, payload)
        }
    }

    getChildContext() {
        return {
            emit: (event, payload) => {
                this.socket.emit(event, payload);
            }
        };
    }

    render() {
        return this.props.children
    }
}

export default connect({}, {  });