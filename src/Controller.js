import React from 'react';
import './Controller.css';

const Controller = ({ onFan, onGate, onTV, onLight, fanOn, gateOpen, tvOn, lightOn }) => {
    return (
        <div className="iphone-controller">
            {/* iPhone notch */}
            <div className="iphone-notch"></div>

            {/* Screen */}
            <div className="controller-screen">
                <h2 className="controller-title">🏠 Smart Home</h2>

                <div className="controller-buttons">
                    <button onClick={onFan} className={`controller-btn ${fanOn ? 'active' : ''}`}>
                        <span>🌀 Fan</span>
                        <small>{fanOn ? 'ON' : 'OFF'}</small>
                    </button>

                    <button onClick={onGate} className={`controller-btn ${gateOpen ? 'active' : ''}`}>
                        <span>🚪 Gate</span>
                        <small>{gateOpen ? 'OPEN' : 'CLOSED'}</small>
                    </button>

                    <button onClick={onTV} className={`controller-btn ${tvOn ? 'active' : ''}`}>
                        <span>📺 TV</span>
                        <small>{tvOn ? 'ON' : 'OFF'}</small>
                    </button>

                    <button onClick={onLight} className={`controller-btn ${lightOn ? 'active' : ''}`}>
                        <span>💡 Light</span>
                        <small>{lightOn ? 'ON' : 'OFF'}</small>
                    </button>
                </div>
            </div>

            {/* iPhone bottom bar */}
            <div className="iphone-bottom-bar"></div>
        </div>
    );
};

export default Controller;
