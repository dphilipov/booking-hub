export default function getCurrentDate() {
    const date = new Date();
    const currentDate = date.toISOString().slice(0, 10);

    return currentDate;
}