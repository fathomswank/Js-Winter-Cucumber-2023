Feature: Feedback

# Scenario: Verify user can submit feedback after completing the feedback form
#     Given I am on hotels homepage
#     And I click on SignIn link
#     Then I click on "Feedback"
#     Then I select 5 star rating
#     And I enter "Hotels.com is great" in comments section
#     And I select "Highly likely" for how likely are you to return to Hotels website
#     And I select "Yes" for "Prior to this visit, have you ever booked on Hotels website
#     And I select "Yes" for "Did you accomplish what you wanted to do on this page"
#     Then I click on submit feedback
#     And I confirm "THANK YOU FOR YOUR FEEDBACK" header is displayed

Scenario: Verify error is displayed when user submits the empty feedback form
    Given I am on hotels homepage
    And I click on SignIn link
    Then I click on "Feedback"
    When I click on submit feedback
    Then I verify "Please fill in the required information highlighted below." error displayed
    And I verify red-dotted line is displayed around star section





