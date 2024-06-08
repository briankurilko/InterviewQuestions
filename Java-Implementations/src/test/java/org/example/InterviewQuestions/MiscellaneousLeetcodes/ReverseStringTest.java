package org.example.InterviewQuestions.MiscellaneousLeetcodes;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ReverseStringTest {

    @Test
    void reverseString() {
        ReverseString reverseString = new ReverseString();
        char[] charArray = {'h', 'e', 'l', 'l', 'o'};
        char[] chars = reverseString.reverseString(charArray);
        System.out.println(chars);
    }
}