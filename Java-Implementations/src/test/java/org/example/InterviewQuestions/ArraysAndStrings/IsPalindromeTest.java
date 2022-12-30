package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class IsPalindromeTest {

    @Test
    void isPalindrome() {
        String string = "Tact Coa";
        assertTrue(IsPalindrome.isPalindrome(string));
        assertFalse(IsPalindrome.isPalindrome("asdf"));
    }
}