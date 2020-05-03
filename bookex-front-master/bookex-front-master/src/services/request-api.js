
export function getIncommingRequests(username) {
    const requests = [
        {
            from: "ahmad",
            to: "medarz",
            isbn: "996655223",
            startDate: "2020-05-21",
            endDate: "2020-06-15",
            time: "2020-05-10 05:45",
            status: "Pending"
        },
        {
            from: "mouad",
            to: "medarz",
            isbn: "996655223",
            startDate: "2020-04-02",
            endDate: "2020-05-01",
            time: "2020-04-01 12:36",
            status: "Refused"
        }
    ];
    return new Promise((resolve, reject) => {
        resolve({data: requests});
    })
}

export function getOutgoingRequests(username) {
    const requests = [
        {
            from: "medarz",
            to: "mouad",
            isbn: "16635255",
            startDate: "2020-05-21",
            endDate: "2020-06-15",
            time: "2020-05-10 05:45",
            status: "Accepted"
        },
        {
            from: "medarz",
            to: "ahmad",
            isbn: "748559556",
            startDate: "2020-04-02",
            endDate: "2020-05-01",
            time: "2020-04-01 12:36",
            status: "Started"
        }
    ];
    return new Promise((resolve, reject) => {
        resolve({data: requests});
    })
}