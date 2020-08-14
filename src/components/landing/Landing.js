import React from 'react';
import './Landing.css';
import Headsec from './Headsec';
import Sectinc from './Sectinc';
import Sectina from './Sectina';
import Sectinb from './Sectinb';


class Landing extends React.Component {
    render()
    {
        return (
                <div>
                    <Headsec/>
                    <Sectina/>
                    <Sectinb/>
                    <Sectinc/>
                </div>
        );
    }

}

export default Landing;