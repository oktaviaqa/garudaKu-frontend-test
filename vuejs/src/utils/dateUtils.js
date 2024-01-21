import { format, parseISO } from 'date-fns';

export function formatCustomDate(pubDate) {
    const date = parseISO(pubDate);
    return format(date, "EEEE, dd MMM yyyy HH:mm 'WIB'");
}
