package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StringCompressionTest {

    @Test
    void compressString() {
        assertEquals("a2b1c5a3", StringCompression.compressString("aabcccccaaa"));
        assertEquals("a20", StringCompression.compressString("aaaaaaaaaaaaaaaaaaaa"));
        assertEquals("aabb", StringCompression.compressString("aabb"));
        assertEquals("", StringCompression.compressString(""));
    }
}