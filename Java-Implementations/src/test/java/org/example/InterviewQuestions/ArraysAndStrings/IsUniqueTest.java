package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class IsUniqueTest {

    @Test
    void isUniqueSet() {
        String uniqueString = "abcd";
        assertTrue(IsUnique.isUniqueSetImplementation(uniqueString));

        String nonUniqueString = "abca";
        assertFalse(IsUnique.isUniqueSetImplementation(nonUniqueString));
    }

    @Test
    void isUniqueIterative() {
        String uniqueString = "abcd";
        assertTrue(IsUnique.isUniqueIterativeImplementation(uniqueString));

        String nonUniqueString = "abca";
        assertFalse(IsUnique.isUniqueIterativeImplementation(nonUniqueString));
    }

    @Test
    void isUniqueSorted() {
        String uniqueString = "abcd";
        assertTrue(IsUnique.isUniqueSortedImplementation(uniqueString));

        String nonUniqueString = "abca";
        assertFalse(IsUnique.isUniqueSortedImplementation(nonUniqueString));
    }
}