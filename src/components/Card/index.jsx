import React from "react";

export function Card({name, time}) {
    return(
        <div className="h-24 w-1/2 bg-blue-600 text-white rounded-lg mb-5 flex items-center justify-between p-6">
            <strong className="text-lg">{name}</strong>
            <small>{time}</small>
        </div>
    )
}