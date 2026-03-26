"use client";

import React from 'react';
import { CALENDAR_EVENTS } from '@/data/calendar-data';

export default function CalendarPage() {
  const sortedEvents = [...CALENDAR_EVENTS].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.startTime}`);
    const dateB = new Date(`${b.date}T${b.startTime}`);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-32">
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <p className="text-neutral-400 mb-6">Upcoming meetings and events.</p>

      <div className="space-y-4">
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">{event.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  event.status === 'scheduled'
                    ? 'bg-blue-900/40 text-blue-300'
                    : event.status === 'completed'
                    ? 'bg-green-900/40 text-green-300'
                    : 'bg-red-900/40 text-red-300'
                }`}
              >
                {event.status}
              </span>
            </div>
            <p className="text-sm text-neutral-400">
              {event.date} &middot; {event.startTime} - {event.endTime} {event.timezone}
            </p>
            {event.attendees && event.attendees.length > 0 && (
              <p className="text-sm text-neutral-500 mt-2">
                With: {event.attendees.join(', ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
