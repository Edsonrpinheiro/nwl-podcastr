export function convertDurationToTimeString(duration: number) {
    const minutesForHour = 3600;
    const secondsInAMinute = 60;
    
    const hours = Math.floor(duration /minutesForHour);
    const minutes = Math.floor((duration % minutesForHour) / 60);
    const seconds = duration % secondsInAMinute;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

    return timeString;
}