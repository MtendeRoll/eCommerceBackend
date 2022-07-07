# e-Commerce Backend

This is a backend application that uses a working Express.js API and is configured to use Sequelize to interact with a MySQL database.

## Table of contents

- [Installation](#installation)
- [Application Criteria](#application-criteria)
- [Links](#links)
- [Video](#walkthrough-video)
- [License](#license)

## Installation

The JSON file will have the necessary dependencies. type this in your command line:

```
npm i
```

## Application Criteria

GIVEN a functional Express.js API:

- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
  THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
  THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
  THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia for categories, products, or tags
  THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
  THEN I am able to successfully create, update, and delete data in my database

## Links

- [Github Repository](https://github.com/MtendeRoll/eCommerceBackend)

## Walkthrough Video

- A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your README file.

- The walkthrough video must show all of the technical acceptance criteria being met.

- The walkthrough video must demonstrate how to create the schema from the MySQL shell.

- The walkthrough video must demonstrate how to seed the database from the command line.

- The walkthrough video must demonstrate how to start the application’s server.

- The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.

- The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.

- The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia

[Video](./assets/video/)

## License

- MIT

MIT License Copyright (c) [2022] Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
