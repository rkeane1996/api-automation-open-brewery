@GetBrewery
Feature: Component Test for the Get Brewery Endpoint

Scenario: Retrieve Brewery Successfully
    Given a valid brewery ID
    When a request is made to retrieve the brewery
    Then the "getBrewery" request should succeed with a status of "OK"
    * Ensure the correct brewery is returned

Scenario: Attempt to Retrieve Brewery with Invalid ID
    Given an invalid brewery ID
    When a request is made to retrieve the brewery
    Then the "getBrewery" request should fail with a status of "NOT_FOUND"





