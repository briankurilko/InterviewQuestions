package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class ZeroMatrixTest {

    @Test
    void zeroMatrixSetImpl() {
        int[][] matrix = {
                {5, 1, 2, 3, 4, 0},
                {8, 9, 10, 4, 1, 2},
                {5, 6, 7, 8, 9, 10},
                {2, 3, 4, 5, 6, 7},
                {10, 3, 1, 2, 3, 4},
                {7, 8, 9, 10, 0, 1},
                {0, 5, 6, 7, 8, 9},
        };

        int[][] expected = {
                {0, 0, 0, 0, 0, 0},
                {0, 9, 10, 4, 0, 0},
                {0, 6, 7, 8, 0, 0},
                {0, 3, 4, 5, 0, 0},
                {0, 3, 1, 2, 0, 0},
                {0, 0, 0, 0, 0, 0},
                {0, 0, 0, 0, 0, 0}
        };

        ZeroMatrix.zeroMatrixSetImpl(matrix);
        assertEquals(Arrays.deepToString(expected), Arrays.deepToString(matrix));
    }

    @Test
    void zeroMatrixInPlace() {
        int[][] matrix = {
                {5, 1, 2, 3, 4, 0},
                {8, 9, 10, 4, 1, 2},
                {5, 6, 7, 8, 9, 10},
                {2, 3, 4, 5, 6, 7},
                {10, 3, 1, 2, 3, 4},
                {7, 8, 9, 10, 0, 1},
                {0, 5, 6, 7, 8, 9},
        };

        int[][] expected = {
                {0, 0, 0, 0, 0, 0},
                {0, 9, 10, 4, 0, 0},
                {0, 6, 7, 8, 0, 0},
                {0, 3, 4, 5, 0, 0},
                {0, 3, 1, 2, 0, 0},
                {0, 0, 0, 0, 0, 0},
                {0, 0, 0, 0, 0, 0}
        };

        ZeroMatrix.zeroMatrixInPlace(matrix);
        assertEquals(Arrays.deepToString(expected), Arrays.deepToString(matrix));
    }

    @Test
    void zeroMatrixInPlace_NoSideZeros() {
        int[][] matrix = {
                {5, 1, 2, 3, 4, 3},
                {8, 9, 10, 4, 1, 2},
                {5, 6, 7, 8, 9, 10},
                {2, 3, 4, 5, 6, 7},
                {10, 3, 1, 2, 3, 4},
                {7, 8, 9, 10, 0, 1},
                {4, 5, 6, 7, 8, 9},
        };

        int[][] expected = {
                {5, 1, 2, 3, 0, 3},
                {8, 9, 10, 4, 0, 2},
                {5, 6, 7, 8, 0, 10},
                {2, 3, 4, 5, 0, 7},
                {10, 3, 1, 2, 0, 4},
                {0, 0, 0, 0, 0, 0},
                {4, 5, 6, 7, 0, 9}
        };

        ZeroMatrix.zeroMatrixInPlace(matrix);
        assertEquals(Arrays.deepToString(expected), Arrays.deepToString(matrix));
    }

    @Test
    void zeroMatrixSetImpl_NoSideZeros() {
        int[][] matrix = {
                {5, 1, 2, 3, 4, 3},
                {8, 9, 10, 4, 1, 2},
                {5, 6, 7, 8, 9, 10},
                {2, 3, 4, 5, 6, 7},
                {10, 3, 1, 2, 3, 4},
                {7, 8, 9, 10, 0, 1},
                {4, 5, 6, 7, 8, 9},
        };

        int[][] expected = {
                {5, 1, 2, 3, 0, 3},
                {8, 9, 10, 4, 0, 2},
                {5, 6, 7, 8, 0, 10},
                {2, 3, 4, 5, 0, 7},
                {10, 3, 1, 2, 0, 4},
                {0, 0, 0, 0, 0, 0},
                {4, 5, 6, 7, 0, 9}
        };

        ZeroMatrix.zeroMatrixSetImpl(matrix);
        assertEquals(Arrays.deepToString(expected), Arrays.deepToString(matrix));
    }
}