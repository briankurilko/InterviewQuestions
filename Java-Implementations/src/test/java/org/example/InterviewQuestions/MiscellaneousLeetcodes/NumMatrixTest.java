package org.example.InterviewQuestions.MiscellaneousLeetcodes;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class NumMatrixTest {

    @Test
    void sumRegion() {
        NumMatrix numMatrix = new NumMatrix(new int[][]{{-1}});
        assertEquals(-1, numMatrix.sumRegion(0, 0, 0, 0));
    }
}