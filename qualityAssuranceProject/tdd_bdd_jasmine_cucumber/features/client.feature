Feature: List of clients
    Scenario: "List of clients"
    Given I have "10" clients in my database
    When I access the home webpage
    Then show a list with the "10" clients