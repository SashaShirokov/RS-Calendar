import  React from 'react';

class Controls extends React.Component {
  constructor(props) {
      super(props);
      this.onStatusChange = this.onStatusChange.bind(this);
  }
    onStatusChange(newStatus) {
      return () => {
        this.props.onStatusChange(newStatus);
      }
    }

    render() {
  		let {countStatus} = this.props;
      let that = this;

  		let renderStartStopButton = () => {
  			if (countStatus === "started") {
  				return <button className="button secondary" onClick={that.onStatusChange("paused")}>Pause</button>
  			} else {
  				return <button className="button primary" onClick={that.onStatusChange("started")}>Start</button>
  			}
  		};
  		return(
  			<div className="controls">
  				{renderStartStopButton()}
  				<button className="button alert hollow" onClick={this.onStatusChange("stopped")}>Clear</button>
  			</div>
  		);
  	}
}

Controls.propTypes = {
    countStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
}

export default Controls;
