import React from 'react';

export default function Posts({items}) {
    console.log(items);
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}