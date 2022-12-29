package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UrlifyTest {

    @Test
    void urlify() {
        String string = "Mr John Smith    ";

        char[] charArray = Urlify.urlify(string.toCharArray(), 13);

        String expected = "Mr%20John%20Smith";
        assertEquals(expected.length(), 17);
        assertEquals(expected, new String(charArray));
    }

    @Test
    void urlifyOptimized() {
        String string = "Mr John Smith    ";

        char[] charArray = Urlify.urlifyOptimized(string.toCharArray(), 13);

        String expected = "Mr%20John%20Smith";
        assertEquals(expected.length(), 17);
        assertEquals(expected, new String(charArray));
    }
}