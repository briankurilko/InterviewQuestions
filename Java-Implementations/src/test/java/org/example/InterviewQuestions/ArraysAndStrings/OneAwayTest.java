package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class OneAwayTest {

    @Test
    void oneAway() {
        assertTrue(OneAway.oneAway("pale", "ple"));
        assertTrue(OneAway.oneAway("pales", "pale"));
        assertTrue(OneAway.oneAway("pale", "bale"));
        assertTrue(OneAway.oneAway("pale", "pale"));
        assertTrue(OneAway.oneAway("ple", "pale"));
        assertFalse(OneAway.oneAway("ple", "pade"));
        assertFalse(OneAway.oneAway("pale", "bake"));
        assertFalse(OneAway.oneAway("palelhbhb", "bake"));
        assertFalse(OneAway.oneAway("aabb", "bbaa"));
    }
}