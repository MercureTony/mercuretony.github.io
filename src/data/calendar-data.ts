export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  timezone: string;
  attendees?: string[];
  status: 'scheduled' | 'completed' | 'cancelled';
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: "meeting-001",
    title: "Test",
    date: "2026-03-26",
    startTime: "14:30",
    endTime: "14:45",
    timezone: "EST",
    attendees: ["Nader CPA"],
    status: "scheduled",
  },
];
