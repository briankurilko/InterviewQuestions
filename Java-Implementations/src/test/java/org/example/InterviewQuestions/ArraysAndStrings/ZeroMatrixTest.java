package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class ZeroMatrixTest {

    @Test
    void zeroMatrixSetImpl() {
        int[][] matrix = {
                {5, 1, 2, 3, 4, 5},
                {8, 9, 10, 4, 1, 2},
                {5, 6, 7, 8, 9, 10},
                {2, 3, 4, 5, 6, 7},
                {10, 0, 1, 2, 3, 4},
                {7, 8, 9, 10, 0, 1},
                {4, 5, 6, 7, 8, 9},
        };

        ZeroMatrix.zeroMatrixSetImpl(matrix);
        System.out.println(Arrays.deepToString(matrix));
    }
}