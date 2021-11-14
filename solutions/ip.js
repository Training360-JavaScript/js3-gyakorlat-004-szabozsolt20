const checkIP = (ipAddress) => {
    //const ip = /^\d{1,3}(?:\.\d{1,3}){3}$/;
    //'\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(.|$)){4}\b'
    //https://rgxdb.com/r/1C0GISTC
    const ip = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/;

    return ip.test(ipAddress);
}

export default checkIP;