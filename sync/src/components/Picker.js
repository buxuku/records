import React from 'react';

export default function ({ value, onChange, options}) {
    return (
        <span>
            <h1>{value}</h1>
            <select
              onChange={e => onChange(e.target.value)}
              value={value}
            >
            {options.map(item => (<option value={item} key={item}>
                {item}
                </option>
            ))}
            </select>
        </span>
    )
}