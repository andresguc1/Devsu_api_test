# Cypress API Test Suite for demoblaze

This repository contains Cypress test scripts for testing the demoblaze API endpoints.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

'''git clone <repository-url>'''

2. Navigate into the cloned repository directory:

'''cd <repository-directory>'''

3. Install dependencies:

''' npm install'''




## Usage

To run the Cypress tests, use the following command:

Run Cypress on UI
  
'''npm run test-ui'''

Run Cypress in terminal

'''
    npm run test-terminal
'''

This will execute the Cypress test suite.

## Test Cases

The Cypress test suite consists of the following API test cases:

1. **API Test: Sign up new user**
   - Verifies the successful sign up of a new user.

2. **API Test: Sign up existing user**
   - Verifies the error message when trying to sign up with an existing user.

3. **API Test: Login valid user**
   - Verifies successful login of a valid user and presence of authentication token.

4. **API Test: Login with non-existent user**
   - Verifies the error message when trying to login with a non-existent user.

5. **API Test: Login with existent user with wrong password**
   - Verifies the error message when trying to login with an existent user but with a wrong password.

## Notes

- Update the fixture files (`signup_new_user.json`, `signup_existing_user.json`, etc.) with appropriate test data as per your testing needs.
  in the  file `signup_new_user.json` the user require update manually with a un-existing user (I have many difficulties with the fake user generation :-( ))


