export const datesDiffByDays = (date1, date2) => {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return Math.floor((Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate()) - Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate()) ) / (1000 * 60 * 60 * 24));
}