import { NextApiRequest, NextApiResponse } from "next";
// import { faker } from '@faker-js/faker';

interface Company {
    id: string;
    name: string;
    description: string;
    location: string;
    website: string;
    revenue: number;
    employees: number;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    // const companies: Company[] = new Array(10).fill(null).map(() => ({
    //     id: faker.string.uuid(),
    //     name: faker.company.name(),
    //     description: faker.company.catchPhrase(),
    //     location: faker.location.city() + ', ' + faker.location.state({ abbreviated: true }),
    //     website: faker.internet.url(),
    //     revenue: faker.number.int({ min: 1000000, max: 1000000000 }),
    //     employees: faker.number.int({ min: 3, max: 100 })
    // }))

    res.status(200).json([{ "id": "9eb7c4e6-1c81-4ee6-a639-c9ac9dc458ef", "name": "Schaden, Kshlerin and Gulgowski", "description": "Down-sized multi-tasking pricing structure", "location": "Adelinebury, NC", "website": "https://twin-neurobiologist.info", "revenue": 391657225, "employees": 50 }, { "id": "2347a28c-6276-4209-b8f9-cc6a2b63d24b", "name": "Treutel LLC", "description": "Focused asymmetric algorithm", "location": "New Rodger, VT", "website": "https://metallic-expansion.name/", "revenue": 345709173, "employees": 87 }, { "id": "1590a836-7222-4c5d-8ba6-74ef1d078e0a", "name": "Collier, Kutch and Zemlak", "description": "Reduced modular emulation", "location": "Port Kailynchester, MS", "website": "https://incredible-vane.net", "revenue": 826621860, "employees": 90 }, { "id": "7e55ee66-694c-40fe-8c85-54f250aae70d", "name": "Schuster, Deckow and Stanton", "description": "Polarised radical support", "location": "West Edwardoborough, UT", "website": "https://odd-boatload.biz", "revenue": 808385294, "employees": 37 }, { "id": "5544dbcf-dea7-4b12-92b5-024c56901798", "name": "Nienow and Sons", "description": "Virtual stable internet solution", "location": "Mortimerport, MD", "website": "https://inferior-break.org/", "revenue": 359454299, "employees": 83 }, { "id": "b9559cf3-e9b1-4b8d-be76-d284cf7c55c0", "name": "Nitzsche, Spinka and Abbott", "description": "Networked eco-centric data-warehouse", "location": "Port Raoul, AR", "website": "https://ordinary-qualification.org/", "revenue": 842335027, "employees": 54 }, { "id": "fb038ddc-22e0-43da-a495-8f8f3c531bb6", "name": "Hudson Inc", "description": "Front-line uniform local area network", "location": "Lake Lamar, NY", "website": "https://stained-tower.org/", "revenue": 859113598, "employees": 58 }, { "id": "f202cf05-b494-44af-82c7-fc0380011766", "name": "Jenkins - Pouros", "description": "Vision-oriented radical hierarchy", "location": "Lincoln, MN", "website": "https://brisk-search.net/", "revenue": 131366156, "employees": 23 }, { "id": "ae81da07-4086-464a-92fe-ff24a734e3d7", "name": "Ferry, Kirlin and Ondricka", "description": "Devolved fresh-thinking circuit", "location": "Augustusfurt, MO", "website": "https://adored-minion.org", "revenue": 304747541, "employees": 92 }, { "id": "0e12c98f-4171-45ee-af96-d5c67099bd4d", "name": "Ullrich Inc", "description": "Decentralized web-enabled task-force", "location": "East Monique, IN", "website": "https://colorful-plasterboard.net", "revenue": 959936349, "employees": 66 }])
}

