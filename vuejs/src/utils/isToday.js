export function isToday(pubDate) {
    const articleDate = new Date(pubDate);
    const today = new Date();
    return (
        articleDate.getDate() === today.getDate() &&
        articleDate.getMonth() === today.getMonth() &&
        articleDate.getFullYear() === today.getFullYear()
    );
}
