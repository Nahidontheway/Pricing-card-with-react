import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
          "Assignment": "Assignment 1",
          "Marks": 60,
          "Quiz": 10
        },
        {
          "Assignment": "Assignment 2",
          "Marks": 59,
          "Quiz": 9
        },
        {
          "Assignment": "Assignment 3",
          "Marks": 60,
          "Quiz": 7
        },
        {
          "Assignment": "Assignment 4",
          "Marks": 57,
          "Quiz": 10
        }
      ]
    return (
        <div>
            <LineChart width={500} height={400} data={data}>
                <XAxis dataKey="Assignment" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Assignment" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Marks" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;