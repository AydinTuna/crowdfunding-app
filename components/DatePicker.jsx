"use client"


import 'react-day-picker/dist/style.css';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const pastMonth = Date.now();

export default function App() {
    const defaultSelected = {
        from: pastMonth,
        to: pastMonth
    };
    const [range, setRange] = useState(defaultSelected);

    let footer = <p className='absolute text-md'>Please pick the first day.</p>;
    if (range?.from) {
        if (!range.to) {
            footer = <p className='absolute text-md font-bold'><span className='text-md font-normal text-gray-900 dark:text-white'>You selected: </span> {format(range.from, 'PPP')}</p>;
        } else if (range.to) {
            footer = (
                <p className='absolute text-md font-bold'>
                    <span className='text-md font-normal text-gray-900 dark:text-white mr-2'>from</span> {format(range.from, 'PPP')} <span className='text-md font-normal text-gray-900 dark:text-white mx-2'>to</span>  {format(range.to, 'PPP')}
                </p>
            );
        }
    }

    return (
        <DayPicker
            id="test"
            mode="range"
            defaultMonth={pastMonth}
            selected={range}
            footer={footer}
            onSelect={setRange}
            fromYear={new Date().getFullYear()}
            toYear={new Date().getFullYear() + 1}
        />
    );
}