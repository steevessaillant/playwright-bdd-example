Feature: Input data cleanser

    Scenario: User enter badly formatted full name
        Given User enter full name as "john DOe"
        When full name is verified
        Then a properly formatted string is returned as "John Doe"