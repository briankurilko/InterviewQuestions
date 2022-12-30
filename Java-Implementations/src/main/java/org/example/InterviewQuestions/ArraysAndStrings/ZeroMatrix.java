package org.example.InterviewQuestions.ArraysAndStrings;


import java.util.HashSet;
import java.util.Set;

// Question 1.8: Zero Matrix
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to O.
public class ZeroMatrix {

    // You remember, there's a way to do this is O(N * M) time and O(N * M) space,
    // but there's also a way to do this in O(N * M) time and O(1) space if we edit it in place.
    // Because there's no constraint on the numbers that can be in the matrix, I'll do the set implementation first.
    public static void zeroMatrixSetImpl(int[][] matrix) {
        Set<Integer> rowsWithZeros = new HashSet<>();
        Set<Integer> colsWithZeros = new HashSet<>();

        for (int i = 0; i < matrix.length; ++i) {
            for (int j = 0; j < matrix[0].length; ++j) {
                if (matrix[i][j] == 0) {
                    rowsWithZeros.add(i);
                    colsWithZeros.add(j);
                }
            }
        }

        for (Integer row : rowsWithZeros) {
            for (int j = 0; j < matrix[0].length; ++j) {
                matrix[row][j] = 0;
            }
        }

        for (Integer col : colsWithZeros) {
            for (int i = 0; i < matrix.length; ++i) {
                matrix[i][col] = 0;
            }
        }
    }
}
