/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  ChevronLeft,
  ChevronRight,
} from '../../../../../../public/assets/icons';

export default function DatePickerPrompt({ isOpen, setOpen, setDueDate }) {
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().month());
  const [calendar, setCalendar] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    moment().year(year).month(month).date(moment().date()),
  );

  useEffect(() => {
    setYear(moment().year());
    setMonth(moment().month());
    setSelectedDate(moment().year(year).month(month).date(moment().date()));
  }, [isOpen]);

  useEffect(() => {
    const cal = [];

    const date = moment()
      .year(year)
      .month(month)
      .date(1)
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0);

    const startDay = date.day();
    const daysInMonth = date.daysInMonth();

    let row = [];
    for (let j = 0; j < startDay; j++) {
      row.push(0);
    }

    for (let j = 1; j <= daysInMonth; j++) {
      row.push(j);
      if ((j + startDay) % 7 === 0) {
        cal.push(row);
        row = [];
      }
    }

    if (row.length > 0) {
      cal.push(row);
    }

    setCalendar(cal);
  }, [year, month]);

  return (
    <div
      className={`w-full h-screen fixed flex items-center justify-center overscroll-contain ${
        isOpen ? 'z-[9999]' : 'z-[-1] transition-all delay-500'
      } top-0 left-0`}
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        className={`w-full h-full absolute top-0 left-0 transition-colors duration-500 ${
          isOpen ? 'bg-gray-900/20' : 'bg-transparent'
        }`}
      />
      <div
        className={`bg-base-100 rounded-2xl shadow-xl relative transition-all duration-500 p-8 pb-4 ${
          isOpen ? 'translate-x-0' : 'translate-x-[500%]'
        }`}
      >
        <div className="w-full select-none date-picker">
          <div className="flex w-full items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => {
                if (month === 0) {
                  setYear(year - 1);
                  setMonth(11);
                } else {
                  setMonth(month - 1);
                }
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-center font-semibold text-lg">
              {moment().month(month).format('MMMM')} {year}
            </h2>
            <button
              type="button"
              onClick={() => {
                if (month === 11) {
                  setYear(year + 1);
                  setMonth(0);
                } else {
                  setMonth(month + 1);
                }
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <table className="h-80">
            <thead>
              <tr>
                <th className="font-black text-custom-500">S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              {calendar.map((row, i) => (
                <tr key={i}>
                  {row.map((day, j) => (
                    <td
                      onClick={() =>
                        day &&
                        setSelectedDate(
                          moment()
                            .year(year)
                            .month(month)
                            .date(day)
                            .hour(0)
                            .minute(0)
                            .second(0)
                            .millisecond(0),
                        )
                      }
                      className={`text-center rounded-lg ${
                        day && 'cursor-pointer hover:bg-custom-100'
                      } transition-all ${!j && 'font-bold'} ${
                        selectedDate.year() === year &&
                        selectedDate.month() === month &&
                        selectedDate.date() === day &&
                        'bg-custom-500 text-custom-50 font-medium hover:bg-custom-500'
                      }`}
                      key={j}
                    >
                      {day || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => {
            setDueDate(selectedDate);
            setOpen(false);
          }}
          type="button"
          className="btn w-full btn-custom-500 bg-custom-500 hover:bg-custom-600 px-6 text-custom-50 normal-case mt-4"
        >
          Select Date
        </button>
        <button
          onClick={() => setOpen(false)}
          type="button"
          className="btn w-full bg-base-200 hover:bg-base-300 px-6 text-secondary-content border-none normal-case mt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
