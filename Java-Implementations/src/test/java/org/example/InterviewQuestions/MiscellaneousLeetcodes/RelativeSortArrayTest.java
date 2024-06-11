package org.example.InterviewQuestions.MiscellaneousLeetcodes;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RelativeSortArrayTest {

    @Test
    void relativeSortArray() {
        RelativeSortArray relativeSortArray = new RelativeSortArray();
        int[] result = relativeSortArray.relativeSortArray(new int[]{2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31}, new int[]{2, 42, 38, 0, 43, 21});
        assertArrayEquals(new int[]{2,42,38,0,43,21,5,7,12,12,13,23,24,24,27,29,30,31,33,48}, result);
    }
}