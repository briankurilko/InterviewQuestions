package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CheckPermutationTest {

    @Test
    void checkPermutationMapSolution() {
        String string1 = "abcdef";
        String string2 = "fdabce";
        assertTrue(CheckPermutation.checkPermutationMapSolution(string1, string2));

        string1 = "abcdef";
        string2 = "hijklm";
        assertFalse(CheckPermutation.checkPermutationMapSolution(string1, string2));

        string1 = "poiuhbh";
        string2 = "poiubobbb";
        assertFalse(CheckPermutation.checkPermutationMapSolution(string1, string2));
    }

    @Test
    void checkPermutationSortedSolution() {
        String string1 = "abcdef";
        String string2 = "fdabce";
        assertTrue(CheckPermutation.checkPermutationSortedSolution(string1, string2));

        string1 = "sdfbasdf";
        string2 = "sdaofiuh";
        assertFalse(CheckPermutation.checkPermutationSortedSolution(string1, string2));

        string1 = "poiuhbh";
        string2 = "poiubobbb";
        assertFalse(CheckPermutation.checkPermutationSortedSolution(string1, string2));
    }
}