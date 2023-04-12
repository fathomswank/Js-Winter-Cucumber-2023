Feature: Sign Up

# Scenario: Verify error message for invalid data in SignUp form
#     Given I am on hotels homepage
#     Then I click on SignIn link
#     And I click on SignUp link
#     When I enter email address as "@@@@@"
#     Then I verify that "Enter a valid email" error is displayed
#     When I enter first name as "!@" 
#     Then I verify that "First name cannot contain special characters" error is displayed
#     When I enter last name as "%^&"
#     Then I verify that "Last name cannot contain special characters" error is displayed
#     Then I enter "technosoft" as password
#     Then I verify "Keep me signed in checkbox is displayed
#     And I verify "Keep me signed in checkbox is enabled
#     Then I verify that "Continue" button is displayed
#     And I verify that "Continue" button is not enabled

    Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        Given I am on hotels homepage
        Then I click on SignIn link
        And I click on SignUp link
        When I click on "Terms and conditions" link
        Then I verify "terms and conditions" page opens in new tab
        Then I verify "Last revised" date format
        
    