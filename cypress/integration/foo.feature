Feature: Placeholder

  @mock
  @api
  Scenario: Foo test
    Given I navigate to "/"
    When I click on the button
    Then I should see "foobar" in the container

  @mock
  @api
  @foo
  Scenario: Foo test
    Given I navigate to "/"
    When I click on the button
    Then I should see "barqux" in the container
