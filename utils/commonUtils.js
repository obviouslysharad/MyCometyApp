export const getFormattedDate = (dateObj = new Date()) => {
    const day = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() + 1;
    const year = dateObj.getUTCFullYear();
    const newdate = day + "/" + month + "/" + year;
    return newdate;
}