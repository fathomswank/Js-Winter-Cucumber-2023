Feature: Travelers

# Scenario: Verify user can update number of guests on Home page
#     Given I am on hotels homepage
#     When I click on Travelers
#     And I select adults as "6"
#     And I select children as "3"
#     Then I select the "first" childs age as "4"
#     And I select the "second" childs age as "Under 1"
#     And I select the "third" childs age as "7"
#     Then I click on "Done"
#     And I verify that total number of travelers is sum of adults and children traveling

Scenario: Verify Child-age dropdowns are same as number of Children selected
    Given I am on hotels homepage
    When I click on Travelers
    Then I select children as "2"
    And I verify there are 2 child dropdowns
    Then I verify plus-button is enabled
    And I verify minus-button is enabled
    Then I select children as "6"
    And I verify there are 6 child dropdowns
    Then I verify plus-button is disabled
    And I verify minus-button is enabled
    Then I select children as "5"
    And I verify there are 5 child dropdowns
    Then I verify plus-button is enabled
    And I verify minus-button is enabled
    Then I select children as "0"
    And I verify there are 0 child dropdowns
    Then I verify plus-button is enabled
    And I verify minus-button is disabled





    
