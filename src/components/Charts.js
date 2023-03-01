import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';



const Charts = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" aspect={2.5}>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" tick={{ stroke: 'black' }} />
                <YAxis tick={{ stroke: 'black' }} />
                <Legend />
                <Bar dataKey="fun" fill="#949398FF" />
                <Bar dataKey="difficulty" fill="#F4DF4EFF" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Charts;
