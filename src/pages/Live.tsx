{
    "id": string,
    "title": string,
    "category": string,
    "date": number, // unix timestamp in milliseconds
    "poster": string | undefined,
    "popular": boolean,
    "teams": undefined | {
        "home": undefined | {
            "name": string,
            "badge": string,
        },
        "away": undefined | {
            "name": string,
            "badge": string,
        },
    },
    "sources": {
        "source": string,
        "id": string,
    }[]
      }
