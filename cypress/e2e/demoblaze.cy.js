describe("demoblaze API test", () => {
  it.skip("API Test: Sign up new user ", () => {
    // Load fixture data
    cy.fixture("signup_new_user").then((payload) => {
      // Send the POST request
      cy.request({
        method: "POST",
        url: "https://api.demoblaze.com/signup",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://www.demoblaze.com",
        },
        body: payload,
      }).then((response) => {
        // Verify the API response
        expect(response.status).to.equal(200);
        expect(response.headers["content-type"]).to.include("application/json");
        expect(response.body).to.equal("");
      });
    });
  });

  it("API Test: Sign up existing user", () => {
    // Load fixture data
    cy.fixture("signup_existing_user").then((payload) => {
      // Send the POST request
      cy.request({
        method: "POST",
        url: "/signup",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "/",
        },
        body: payload,
      }).then((response) => {
        // Verify the API response
        expect(response.status).to.equal(200);
        expect(response.headers["content-type"]).to.include("application/json");
        expect(response.body).to.deep.equal({ errorMessage: "This user already exist." });
      });
    });
  });

  it("API Test: Login valid user", () => {
    // Load fixture data
    cy.fixture("login_valid_user").then((payload) => {
      // Send the POST request
      cy.request({
        method: "POST",
        url: "/login",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "/",
        },
        body: payload,
      }).then((response) => {
        // Verify the API response
        expect(response.status).to.equal(200);
        expect(response.headers["content-type"]).to.include("application/json");
        expect(response.body).to.include("Auth_token:");
      });
    });
  });

  it("API Test: Login with non-existent user", () => {
    // Load fixture data
    cy.fixture("login_nonexistent_user").then((payload) => {
      // Send the POST request
      cy.request({
        method: "POST",
        url: "/login",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "/",
        },
        body: payload,
      }).then((response) => {
        // Verify the API response
        expect(response.status).to.equal(200);
        expect(response.headers["content-type"]).to.include("application/json");
        expect(response.body).to.deep.equal({ errorMessage: "User does not exist." });
      });
    });
  });

  it("API Test: Login with existent user with wrong password ", () => {
    // Load fixture data
    cy.fixture("login_wrong_password").then((payload) => {
      // Send the POST request
      cy.request({
        method: "POST",
        url: "/login",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "/",
        },
        body: payload,
      }).then((response) => {
        // Verify the API response
        expect(response.status).to.equal(200);
        expect(response.headers["content-type"]).to.include("application/json");
        expect(response.body).to.deep.equal({ errorMessage: "Wrong password." });
      });
    });
  });
});