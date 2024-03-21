import React from 'react';

function ColorCard({ color }) {
    return (
        <div className="color-card" style={{ backgroundColor: color }}>
            <p>{color}</p>
        </div>
    );
}

export default ColorCard;