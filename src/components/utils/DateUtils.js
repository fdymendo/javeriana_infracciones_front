export function getFormattedDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    return dd + '/' + mm + '/' + yyyy;
}

export const prod = "https://4yd24uysli.execute-api.us-east-1.amazonaws.com";
export const local = "localhost:8080";
export const local1 = "localhost:8081";
export const local2 = "localhost:8082";