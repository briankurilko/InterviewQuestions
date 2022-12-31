package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StringRotationTest {

    @Test
    void stringIsRotation() {
        String s1 = "waterbottle";
        String s2 = "erbottlewat";

        assertTrue(StringRotation.stringIsRotation(s1, s2));
    }

    @Test
    void stringIsRotation_notARotation() {
        String s1 = "waterbottle";
        String s2 = "erbosdlewat";

        assertFalse(StringRotation.stringIsRotation(s1, s2));
    }

    @Test
    void stringIsRotation_differentLengths() {
        String s1 = "waterbottle";
        String s2 = "erbosdleadsfwat";

        assertFalse(StringRotation.stringIsRotation(s1, s2));
    }
}