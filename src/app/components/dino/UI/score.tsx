import React from 'react';

const Score = ({ value }: { value: number }) => {
    return <div style={{ position: 'absolute', top: 20, right: 20 }}>Score: {value}</div>;
};

export default Score;