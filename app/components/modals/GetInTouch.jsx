import  React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class GetInTouch extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {onToggleGet} = this.props;
        let modalMarkup = (
            <div id="getintouch-modal" className="reveal text-center" data-reveal="">
                <div className='modal'>
                    <h2 className="modal__title"><img className="icon" src="images/icons/mail.svg"></img>Get in  <strong>Touch</strong></h2>
                    <div className="modal__text">
                        <p>If you are interesting in attending our course, connect with us on any of the platforms below!</p>
                    </div>
                    <div className="modal__icons">
                        <a href="#" className="modal__icons-icon"><img className="icon" src="images/icons/facebook.svg"></img></a>
                        <a href="#" className="modal__icons-icon"><img className="icon" src="images/icons/twitter.svg"></img></a>
                        <a href="#" className="modal__icons-icon"><img className="icon" src="images/icons/youtube.svg"></img></a>
                        <a href="#" className="modal__icons-icon"><img className="icon" src="images/icons/instagram.svg"></img></a>
                    </div>
                    <div onClick={onToggleGet()} className="modal__close" data-close="">X</div>
                </div>
            </div>
        );

        let $modalGet = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modalGet);

        let modal = new Foundation.Reveal($('#getintouch-modal'));
        modal.open();
    }

    render() {
        return (
          <div>
          </div>
        )
    }
}

export default GetInTouch;
