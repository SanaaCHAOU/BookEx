
export const users = [
    {
        username: "medarz",
        books: [
            {
                isbn: "16635255",
                availableOn: "2020-05-03",
                status : "Available"
            },{
                isbn: "96658223",
                availableOn: "2020-05-23",
                status : "InUse"
            },{
                isbn: "996655223",
                availableOn: "Available",
                status : "2020-05-03"
            }
        ],
        comments: [
            {
                username: "mouad",
                stars: 3,
                text: "fzpoef pzsdfjlzke zlfjz ldfzd zoeflz;efil zdfgzpdfjz:ejfg pzergjzfgj",
                time: "2020-04-10 05:23:04"
            },
            {
                username: "ahmad",
                stars: 5,
                text: "Some comment here",
                time: "2020-04-10 05:23:04"
            },
            {
                username: "ilyass",
                stars: 2,
                text:  "Another comment here",
                time: "2020-04-10 05:23:04"
            },
            {
                username: "mouad",
                stars: 4,
                text: "Good service and good book",
                time: "2020-04-10 05:25:04"
            }
        ]
    },{
        username: "mouad",
        books: [
            {
                isbn: "16635255",
                availableOn: "2020-06-04",
                status : "InUse"
            },{
                isbn: "748559556",
                availableOn: "2020-05-03",
                status : "Available"
            }
        ],
        comments: [
            {
                username: "medarz",
                stars: 4,
                text: "abc defgh ijk lmn opq rstuv",
                time: "2020-04-10 05:23:04"
            },
            {
                username: "ahmad",
                stars: 4,
                text: "Some comment here",
                time: "2020-04-10 05:23:04"
            },
            {
                username: "ismail",
                stars: 2,
                text:  "Another comment here",
                time: "2020-04-10 05:23:04"
            },
            {
                username: "houda",
                stars: 4,
                text: "Good service and good book",
                time: "2020-04-10 05:25:04"
            }
        ]
    },{
        username: "ahmad",
        books: [
            {
                isbn: "996655223",
                availableOn: "Available",
                status : "2020-05-03"
            }
        ],
        comments: [
            {
                username: "ismail",
                stars: 4,
                text: "abc defgh ijk lmn opq rstuv",
                time: "2020-04-10 05:23:04"
            },
            {
                username: "ahmad",
                stars: 2,
                text: "Some comment here",
                time: "2020-04-10 05:23:04"
            }
        ]
    }
]

export const books = [
    {
        title: "Elite mind",
        isbn: "996655223",
        edition: 1,
        language: "english",
        description: "This psychology book gives some example of poeple chalenged what other defined as impossible",
        comments: [
            {
                username: "mouad",
                stars: 3
            },{
                username: "Ahmad",
                stars: 5
            },{
                username: "Fatima",
                stars: 4
            },{
                username: "Fatiha",
                stars: 2
            }
        ]
    },
    {
        title: "How to create a mind",
        isbn: "748559556",
        edition: 2,
        language: "English",
        description: "A machine learning book that explains IA principles using analogy to the human mind",
        comments: [
            {
                username: "mouad",
                stars: 5
            },{
                username: "Ahmad",
                stars: 4
            },{
                username: "Fatima",
                stars: 1
            },{
                username: "Fatiha",
                stars: 3
            }]
    },{
        title: "Elements of reusable object oriented design",
        isbn: "96658223",
        edition: 1,
        language: "english",
        description: "This software design book explains the 23 known design patterns used in object oriented design",
        comments: [
            {
                username: "mouad",
                stars: 3
            },{
                username: "Ahmad",
                stars: 5
            },{
                username: "Fatima",
                stars: 4
            },{
                username: "Fatiha",
                stars: 2
            }
        ]
    },
    {
        title: "Antigon",
        isbn: "16635255",
        edition: 2,
        language: "French",
        description: "Roman",
        comments: [
            {
                username: "mouad",
                stars: 5
            },{
                username: "Ahmad",
                stars: 4
            },{
                username: "Fatima",
                stars: 1
            },{
                username: "Fatiha",
                stars: 3
            }]
    }
]