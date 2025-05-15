@RandomBrewery
@ComponentTests
Feature: Component Test for the Random Brewery Endpoint

    
  Scenario: Retrieve a Single Random Brewery
    When a request is made to retrieve a random brewery
    Then the "getRandomBrewery" request should succeed with a status of "OK"
    Then a random brewery is returned

  Scenario: Retrieve Multiple Random Breweries
    Given a request retrieve random breweries with a specified size parameter
    When a request is made to retrieve a random brewery
    Then the "getRandomBrewery" request should succeed with a status of "OK"
    Then several breweries are returned
  
  @wip
  Scenario: Attempt to Retrieve Random Breweries with Out-of-Bounds Size
    Given a request is made to retrieve random breweries with an out-of-bounds size parameter
    When a request is made to retrieve a random brewery
    Then the "getRandomBrewery" request should fail with a status of "BAD REQUEST"