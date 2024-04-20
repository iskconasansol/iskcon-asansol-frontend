export const TEMPLE_SCHEDULE = {
    "4:00": "Mangal Arati",
    "5:05": "Tulsi Arati",
    "7:15": "Shringar Arati",
    "7:45": "Guru Puja",
    "8:30": "Pushpa Arati",
    "12:00": "Raj Bhog Arati",
    "12:45": "Temple Closes",
    "16:30": "Utthapana Arati",
    "18:30": "Sandhya Arati",
    "20:30": "Shayan Arati",
    "20:45": "Temple Closes"
}

export const TEMPLE_STATUS = {
    "open": "Open",
    "closed": "Closed"
}

export const isTempleOpen = (hour: number, minutes: number) => {
    const totalMinutes = hour * 60 + minutes;

    if (totalMinutes >= 4 * 60 + 30 && totalMinutes < 12 * 60 + 45) {
        return TEMPLE_STATUS.open;
    } else if (totalMinutes >= 12 * 60 + 45 && totalMinutes < 16 * 30) {
        return TEMPLE_STATUS.closed;
    } else if (totalMinutes >= 16 * 60 + 30 && totalMinutes < 20 * 30) {
        return TEMPLE_STATUS.open;
    } else {
        return TEMPLE_STATUS.closed;
    }
}

export const nextScheduleWithTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const totalMinutes = hour * 60 + minutes;

    if (totalMinutes >= 4 * 60 + 30 && totalMinutes < 12 * 60 + 45) {
        return `12:45 pm  ${TEMPLE_SCHEDULE["12:45"]}`;
    } else if (totalMinutes >= 12 * 60 + 45 && totalMinutes < 16 * 30) {
        return `4:30 pm  ${TEMPLE_SCHEDULE["16:30"]}`;
    } else if (totalMinutes >= 16 * 60 + 30 && totalMinutes < 20 * 30) {
        return `8:45 pm  ${TEMPLE_SCHEDULE["20:45"]}`;
    } else {
        return `4:00 am  ${TEMPLE_SCHEDULE["4:00"]}`;
    }
   
}