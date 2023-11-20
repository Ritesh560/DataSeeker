export const tables = ['users', 'products', 'employees', 'countries', 'books'];

export const queryData = {
  users: Array.from({ length: 40 }, (_, index) => ({
    user_id: index + 1,
    name: `Person ${index + 1}`,
    age: Math.floor(Math.random() * 20) + 20, // Random age between 20 and 40
    city: `City ${index + 1}`,
    state: `State ${index + 1}`
  })),

  limitedUsers: Array.from({ length: 40 }, (_, index) => ({
    user_id: index + 1,
    name: `Person ${index + 1}`
  })),

  products: Array.from({ length: 40 }, (_, index) => ({
    product_id: index + 1,
    productName: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 500) + 500, // Random price between 500 and 1000
    brand: `Brand ${index + 1}`,
    rating: `${Math.floor(Math.random() * 3) + 2}*`
  })),
  employees: Array.from({ length: 40 }, (_, index) => ({
    employeeId: index + 1,
    employeeName: `Employee ${index + 1}`,
    department: `Department ${index + 1}`,
    salary: Math.floor(Math.random() * 2000) + 3000,
    hireDate: `Hire Date for Employee ${index + 1}`,
    employeeStatus: `Status for Employee ${index + 1}`
  })),

  countries: Array.from({ length: 40 }, (_, index) => ({
    countryId: index + 1,
    countryName: `Country ${index + 1}`,
    population: Math.floor(Math.random() * 1000000) + 1000000,
    area: Math.floor(Math.random() * 500) + 500,
    capitalCity: `Capital City for Country ${index + 1}`,
    officialLanguage: `Official Language for Country ${index + 1}`
  })),

  books: Array.from({ length: 40 }, (_, index) => ({
    bookId: index + 1,
    bookTitle: `Book ${index + 1}`,
    author: `Author ${index + 1}`,
    publicationYear: Math.floor(Math.random() * 20) + 2000,
    genre: `Genre for Book ${index + 1}`,
    bookStatus: `Status for Book ${index + 1}`
  }))
};
