package org.example.InterviewQuestions.MiscellaneousLeetcodes;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class KthGrammarTest {

    @Test
    void kthGrammar() {
        assertEquals(1, KthGrammar.kthGrammar(3, 3));
    }

    @Test
    void kthGrammarTwo() {
        assertEquals(1, KthGrammar.kthGrammar(3, 2));
    }

    @Test
    void kthGrammarThree() {
        assertEquals(0, KthGrammar.kthGrammar(5, 13));
    }

    @Test
    void kthGrammarFour() {
        assertEquals(1, KthGrammar.kthGrammar(30, 417219134));
    }
}