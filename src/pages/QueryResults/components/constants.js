export const queryData = {
  users: Array.from({ length: 20 }, (_, index) => ({
    userId: index + 1,
    name: `Person ${index + 1}`,
    age: Math.floor(Math.random() * 20) + 20, // Random age between 20 and 40
    city: `City ${index + 1}`
  })),

  products: Array.from({ length: 20 }, (_, index) => ({
    productId: index + 1,
    productName: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 500) + 500, // Random price between 500 and 1000
    brand: `Brand ${index + 1}`
  })),

  employees: Array.from({ length: 20 }, (_, index) => ({
    employeeId: index + 1,
    employeeName: `Employee ${index + 1}`,
    department: `Department ${index + 1}`,
    salary: Math.floor(Math.random() * 2000) + 3000 // Random salary between 3000 and 5000
  })),

  countries: Array.from({ length: 20 }, (_, index) => ({
    countryId: index + 1,
    countryName: `Country ${index + 1}`,
    population: Math.floor(Math.random() * 1000000) + 1000000, // Random population between 1M and 2M
    area: Math.floor(Math.random() * 500) + 500 // Random area between 500 and 1000
  })),

  books: Array.from({ length: 20 }, (_, index) => ({
    bookId: index + 1,
    bookTitle: `Book ${index + 1}`,
    author: `Author ${index + 1}`,
    publicationYear: Math.floor(Math.random() * 20) + 2000 // Random year between 2000 and 2020
  })),

  suppliers: [
    {
      supplierID: 1,
      companyName: 'Exotic Liquids',
      contactName: 'Charlotte Cooper',
      contactTitle: 'Purchasing Manager',
      address: '49 Gilbert St.',
      city: 'London',
      region: null,
      postalCode: 'EC1 4SD',
      country: 'UK',
      phone: '(171) 555-2222',
      fax: null,
      homePage: null
    },
    {
      supplierID: 2,
      companyName: 'New Orleans Cajun Delights',
      contactName: 'Shelley Burke',
      contactTitle: 'Order Administrator',
      address: 'P.O. Box 78934',
      city: 'New Orleans',
      region: 'LA',
      postalCode: '70117',
      country: 'USA',
      phone: '(100) 555-4822',
      fax: null,
      homePage: '#CAJUN.HTM#'
    },
    {
      supplierID: 3,
      companyName: "Grandma Kelly's Homestead",
      contactName: 'Regina Murphy',
      contactTitle: 'Sales Representative',
      address: '707 Oxford Rd.',
      city: 'Ann Arbor',
      region: 'MI',
      postalCode: '48104',
      country: 'USA',
      phone: '(313) 555-5735',
      fax: '(313) 555-3349',
      homePage: null
    },
    {
      supplierID: 4,
      companyName: 'Tokyo Traders',
      contactName: 'Yoshi Nagase',
      contactTitle: 'Marketing Manager',
      address: '9-8 Sekimai Musashino-shi',
      city: 'Tokyo',
      region: null,
      postalCode: '100',
      country: 'Japan',
      phone: '(03) 3555-5011',
      fax: null,
      homePage: null
    },
    {
      supplierID: 5,
      companyName: "Cooperativa de Quesos 'Las Cabras'",
      contactName: 'Antonio del Valle Saavedra',
      contactTitle: 'Export Administrator',
      address: 'Calle del Rosal 4',
      city: 'Oviedo',
      region: 'Asturias',
      postalCode: '33007',
      country: 'Spain',
      phone: '(98) 598 76 54',
      fax: null,
      homePage: null
    },
    {
      supplierID: 6,
      companyName: "Mayumi's",
      contactName: 'Mayumi Ohno',
      contactTitle: 'Marketing Representative',
      address: '92 Setsuko Chuo-ku',
      city: 'Osaka',
      region: null,
      postalCode: '545',
      country: 'Japan',
      phone: '(06) 431-7877',
      fax: null,
      homePage:
        "Mayumi's (on the World Wide Web)#http://www.microsoft.com/accessdev/sampleapps/mayumi.htm#"
    },
    {
      supplierID: 7,
      companyName: 'Pavlova Ltd.',
      contactName: 'Ian Devling',
      contactTitle: 'Marketing Manager',
      address: '74 Rose St. Moonie Ponds',
      city: 'Melbourne',
      region: 'Victoria',
      postalCode: '3058',
      country: 'Australia',
      phone: '(03) 444-2343',
      fax: '(03) 444-6588',
      homePage: null
    },
    {
      supplierID: 8,
      companyName: 'Specialty Biscuits Ltd.',
      contactName: 'Peter Wilson',
      contactTitle: 'Sales Representative',
      address: "29 King's Way",
      city: 'Manchester',
      region: null,
      postalCode: 'M14 GSD',
      country: 'UK',
      phone: '(161) 555-4448',
      fax: null,
      homePage: null
    },
    {
      supplierID: 9,
      companyName: 'PB Knäckebröd AB',
      contactName: 'Lars Peterson',
      contactTitle: 'Sales Agent',
      address: 'Kaloadagatan 13',
      city: 'Göteborg',
      region: null,
      postalCode: 'S-345 67',
      country: 'Sweden',
      phone: '031-987 65 43',
      fax: '031-987 65 91',
      homePage: null
    },
    {
      supplierID: 10,
      companyName: 'Refrescos Americanas LTDA',
      contactName: 'Carlos Diaz',
      contactTitle: 'Marketing Manager',
      address: 'Av. das Americanas 12.890',
      city: 'Sao Paulo',
      region: null,
      postalCode: '5442',
      country: 'Brazil',
      phone: '(11) 555 4640',
      fax: null,
      homePage: null
    },
    {
      supplierID: 11,
      companyName: 'Heli Süßwaren GmbH & Co. KG',
      contactName: 'Petra Winkler',
      contactTitle: 'Sales Manager',
      address: 'Tiergartenstraße 5',
      city: 'Berlin',
      region: null,
      postalCode: '10785',
      country: 'Germany',
      phone: '(010) 9984510',
      fax: null,
      homePage: null
    },
    {
      supplierID: 12,
      companyName: 'Plutzer Lebensmittelgroßmärkte AG',
      contactName: 'Martin Bein',
      contactTitle: 'International Marketing Mgr.',
      address: 'Bogenallee 51',
      city: 'Frankfurt',
      region: null,
      postalCode: '60439',
      country: 'Germany',
      phone: '(069) 992755',
      fax: null,
      homePage:
        'Plutzer (on the World Wide Web)#http://www.microsoft.com/accessdev/sampleapps/plutzer.htm#'
    },
    {
      supplierID: 13,
      companyName: 'Nord-Ost-Fisch Handelsgesellschaft mbH',
      contactName: 'Sven Petersen',
      contactTitle: 'Coordinator Foreign Markets',
      address: 'Frahmredder 112a',
      city: 'Cuxhaven',
      region: null,
      postalCode: '27478',
      country: 'Germany',
      phone: '(04721) 8713',
      fax: '(04721) 8714',
      homePage: null
    },
    {
      supplierID: 14,
      companyName: 'Formaggi Fortini s.r.l.',
      contactName: 'Elio Rossi',
      contactTitle: 'Sales Representative',
      address: 'Viale Dante 75',
      city: 'Ravenna',
      region: null,
      postalCode: '48100',
      country: 'Italy',
      phone: '(0544) 60323',
      fax: '(0544) 60603',
      homePage: '#FORMAGGI.HTM#'
    },
    {
      supplierID: 15,
      companyName: 'Norske Meierier',
      contactName: 'Beate Vileid',
      contactTitle: 'Marketing Manager',
      address: 'Hatlevegen 5',
      city: 'Sandvika',
      region: null,
      postalCode: '1320',
      country: 'Norway',
      phone: '(0)2-953010',
      fax: null,
      homePage: null
    },
    {
      supplierID: 16,
      companyName: 'Bigfoot Breweries',
      contactName: 'Cheryl Saylor',
      contactTitle: 'Regional Account Rep.',
      address: '3400 - 8th Avenue Suite 210',
      city: 'Bend',
      region: 'OR',
      postalCode: '97101',
      country: 'USA',
      phone: '(503) 555-9931',
      fax: null,
      homePage: null
    },
    {
      supplierID: 17,
      companyName: 'Svensk Sjöföda AB',
      contactName: 'Michael Björn',
      contactTitle: 'Sales Representative',
      address: 'Brovallavägen 231',
      city: 'Stockholm',
      region: null,
      postalCode: 'S-123 45',
      country: 'Sweden',
      phone: '08-123 45 67',
      fax: null,
      homePage: null
    },
    {
      supplierID: 18,
      companyName: 'Aux joyeux ecclésiastiques',
      contactName: 'Guylène Nodier',
      contactTitle: 'Sales Manager',
      address: '203 Rue des Francs-Bourgeois',
      city: 'Paris',
      region: null,
      postalCode: '75004',
      country: 'France',
      phone: '(1) 03.83.00.68',
      fax: '(1) 03.83.00.62',
      homePage: null
    },
    {
      supplierID: 19,
      companyName: 'New England Seafood Cannery',
      contactName: 'Robb Merchant',
      contactTitle: 'Wholesale Account Agent',
      address: 'Order Processing Dept. 2100 Paul Revere Blvd.',
      city: 'Boston',
      region: 'MA',
      postalCode: '02134',
      country: 'USA',
      phone: '(617) 555-3267',
      fax: '(617) 555-3389',
      homePage: null
    },
    {
      supplierID: 20,
      companyName: 'Leka Trading',
      contactName: 'Chandra Leka',
      contactTitle: 'Owner',
      address: '471 Serangoon Loop Suite #402',
      city: 'Singapore',
      region: null,
      postalCode: '0512',
      country: 'Singapore',
      phone: '555-8787',
      fax: null,
      homePage: null
    }
  ]
};
