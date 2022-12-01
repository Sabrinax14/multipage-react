
import {useState} from 'react';

function Dashboard() {
    const [status, setStatus] = useState('scared');

    return(
        <div className="Dashboard">
            <h1>Hello from the Dashboard page</h1>
            <div className= 'profile'> 
            
                <div className="profile_picture">
                <img src="/images/cat.png" alt="scared cat"/>
                </div>
            
                <div className="profile_status"> the current status is:
                   {status === 'not_scared' ? 'not scared': status}
                
                </div>
            
                <h3> Change Statues</h3>

                <select name='status' id='status' onChange= {(e) => setStatus(e.target.value)} >
                 <option value='scared'> Scared</option>
                 <option value='terrifieed'> Terrified</option>
                 <option value='not_scared'>Not scared </option>
                </select>

            </div>

        </div>
    )
};

export default Dashboard;