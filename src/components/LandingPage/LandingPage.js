import React, { PureComponent } from 'react';
import logo from '../../images/logo.png';
import './LandingPage.scss';

export default class LandingPage extends PureComponent {
    render() {
        return (
            <div className="society">
                <div className="society__header">
                    <img src={logo}/>
                    <h1>Virat Meadows Society</h1>
                </div>
                <div className="society__alert">
                    <div>Last day to submit maintainance check</div>
                    <button>View all alerts</button>
                </div>
                <div className="society__body">
                <div className="society__webcam">
                    <div className="cams cam1">
                        Lift
                    </div>
                    <div className="cams cam2">
                        Lobby
                    </div>
                    <div className="cams cam3">
                        Corridor
                    </div>
                    <div className="cams cam4">
                        Main Gate
                    </div>
                </div>
                <div className="society__announcement">

                    <h3> Announcement </h3>
                    <ul>
                    <li> Cricket Tornament to start from 14th March</li>
                    <li> Collect Electricity bill from office</li>
                    <li> Water Timinngs for today: 3-4pm</li>
                    </ul>
                </div>
                </div>
                <div className="society__header">
                    <h4>Current Secrectary: Rupesh Jaiswal</h4>
                </div>
            </div>
        );
    }
}