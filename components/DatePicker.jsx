"use client"

import 'react-day-picker/dist/style.css';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useRef } from 'react';

const pastMonth = Date.now();

export default function DatePicker() {
    const defaultSelected = {
        from: pastMonth,
        to: pastMonth
    };
    const [range, setRange] = useState(defaultSelected);

    const millisecondsToDays = (milliseconds) => {
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
        const days = milliseconds / oneDayInMilliseconds;
        return days;
    }

    let footer = <p className='absolute text-md'>Please pick the first day.</p>;
    if (range?.from) {
        if (!range.to) {
            footer = <p className='absolute text-md font-bold'><span className='text-md font-normal text-gray-900 dark:text-white'>You selected: </span> {format(range.from, 'PPP')} </p>;
        } else if (range.to) {
            footer = (
                <>
                    <p className='absolute text-md font-bold'>
                        <span className='text-md font-normal text-gray-900 dark:text-white mr-2'>from</span> {format(range.from, 'PPP')}
                        <span className='text-md font-normal text-gray-900 dark:text-white mx-2'>to</span>  {format(range.to, 'PPP')}
                        <span className='underline underline-offset-2'>
                            <input type="datetime" name="dateFrom" id="dateFrom" onChange={() => range.from} value={range.from} hidden />
                            <input type="datetime" name="dateTo" id="dateTo" onChange={() => range.to} value={range.to} hidden />
                            <span className='ms-4 text-md font-normal text-gray-900 dark:text-white mr-2'>Selected days:
                            </span>{millisecondsToDays(range.to) - millisecondsToDays(range.from)}
                        </span>
                    </p>
                </>

            );
        }
    }

    return (
        <DayPicker
            id="test"
            mode="range"
            defaultMonth={pastMonth}
            selected={range}
            min={5}
            max={90}
            footer={footer}
            onSelect={setRange}
            fromYear={new Date().getFullYear()}
            toYear={new Date().getFullYear() + 1}
        />
    );
}