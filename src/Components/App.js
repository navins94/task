import React, { Component } from 'react';
import bylaws from '../Assets/bylaws.png';
import download from '../Assets/download.png';
import print from '../Assets/print.png';
import deleteIcon from '../Assets/delete.png';
import '../Style/style.scss';

class App extends Component {
	render() {
		return (
			<div>
				<div className={`corp_wrap`}>
					<div className={`corp_img`}>
						<img src={bylaws} alt="Logo" />
					</div>
					<div className={`corp_title`}>Corporate Bylaws</div>
					<div className="corp_desc">
						An internal document that details the operating rules for the
						corporation and are typically adopted at the organizational meeting
						of the board of directors.
					</div>
					<div className="cta">View document</div>
					<div className={`option_wrap`}></div>
					<div className="corp_option_sec">
						<div className={`options`}>
							<span className={`op_name`}>
								<img src={download} alt="download" /> Download
							</span>
						</div>
						<div className={`options`}>
							<span className={`op_name`}>
								<img src={print} alt="print" /> Print
							</span>
						</div>
						<div className={`options`}>
							<span className={`op_icon`} />
							<span className={`op_name delete`}>
								<img src={deleteIcon} alt="Delete" /> Delete
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
