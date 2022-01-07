Feature: Appointment Booking

    Scenario: Book a thread removal Appointment
        Given I access Maiia Home page
        When I search for dr QATECHNIQUE
        And I select Reason for consultation Thread removal
        Then I should be presented with Consultation Time Table