# Dmoney API Testing Using Postman and Newman

## Project Summary
This project demonstrates the automation of interactions between the DMoney user and the Transaction API using Postman. Additionally, it generates a report with Newman to provide a clear overview of the test results. The documentation includes the API collection run, test cases for both positive and negative scenarios, and a bug report for this project.


## Prerequisites
- Postman
- Newman
- Node.js
- JavaScript
- Git
- VS Code


## Test Scenarios
1. Admin creates an Agent, 2 random Customers, and a Merchant
2. Deposit some money from the SYSTEM account to the Agent
3. Agent deposits money to one of the Customers
4. Check the Agent's balance
5. Send money from one Customer to another Customer
6. Withdraw any amount from a Customer to the Agent (range: 10 TK to 10,000 TK)
7. Check the Customer's balance and transaction statement by trnxId
8. Make a payment from the second Customer to the Merchant
9. The second Customer checks both balance and transaction statement
10. The Merchant checks his balance


## Commands
1. Install Newman using npm: `npm install -g newman`
2. Install Newman reporter using npm: `npm i newman-reporter-htmlextra`
3. Install dotenv using npm: `npm i dotenv`
4. Run the tests using: `node .\report.js`


## Key Features
- API endpoint testing
- Request/response validation
- Automated test scenarios


## API Documentation
https://documenter.getpostman.com/view/50518746/2sB3dPSqAa


## Test Cases
https://docs.google.com/spreadsheets/d/1vXM5DGhp3CjSpozwNu9ImfAHM7I-VFYp/edit?usp=sharing&ouid=104719593444993512902&rtpof=true&sd=true

## Bug Report
https://docs.google.com/spreadsheets/d/1-OMkFjvGtbQF5a16peJ2SmxEquqJ7smK/edit?usp=sharing&ouid=104719593444993512902&rtpof=true&sd=true

## Newman Report
<img width="845" height="801" alt="image" src="https://github.com/user-attachments/assets/1dec5d88-4bb0-43d4-aab3-2e4f7c501392" />

<img width="843" height="821" alt="image" src="https://github.com/user-attachments/assets/be50b29b-d9ed-4fa8-ab96-ba972ed5d165" />

<img width="841" height="201" alt="image" src="https://github.com/user-attachments/assets/e70540ee-6211-46f4-b711-449fea3d347c" />

<img width="841" height="192" alt="image" src="https://github.com/user-attachments/assets/52c287b1-a7c1-4d36-a902-c86c0e967c59" />


