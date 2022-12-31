package org.example.InterviewQuestions.ArraysAndStrings;


import java.util.HashSet;
import java.util.Set;

// Question 1.8: Zero Matrix
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to O.
public class ZeroMatrix {

    // O(N * M) time, O(N * M) space
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

    // O(n * m) time, O(1) space.
    // Note that this assumes that the matrix will never have -1 in it. If we were using an Integer matrix, we could
    // use null instead, but since we're not, we'll just use null.
    public static void zeroMatrixInPlace(int[][] matrix) {
        boolean firstRowHasZero = false;
        boolean firstColHasZero = false;
        for (int i = 0; i < matrix.length; ++i) {
            for (int j = 0; j < matrix[0].length; ++j) {
                if (matrix[i][j] == 0) {
                    if (i == 0) {
                        firstRowHasZero = true;
                    }
                    if (j == 0) {
                        firstColHasZero = true;
                    }
                    matrix[0][j] = -1;
                    matrix[i][0] = -1;
                }
            }
        }

        for (int i = 1; i < matrix.length; ++i) {
            if (matrix[i][0] == -1) {
                nullifyRow(matrix, i);
            }
        }

        for (int j = 1; j < matrix[0].length; ++j) {
            if (matrix[0][j] == -1) {
                nullifyCol(matrix, j);
            }
        }

        if (firstRowHasZero) {
            nullifyRow(matrix, 0);
        }

        if (firstColHasZero) {
            nullifyCol(matrix, 0);
        }

        for (int i = 0; i < matrix.length; ++i) {
            if (matrix[i][0] == -1) {
                matrix[i][0] = 0;
            }
        }

        for (int j = 0; j < matrix[0].length; ++j) {
            if (matrix[0][j] == -1) {
                matrix[0][j] = 0;
            }
        }
    }

    private static void nullifyRow(int[][] matrix, int row) {
        for (int j = 1; j < matrix[0].length; ++j) {
            matrix[row][j] = 0;
        }
    }

    private static void nullifyCol(int[][] matrix, int column) {
        for (int i = 1; i < matrix.length; ++i) {
            matrix[i][column] = 0;
        }
    }
}
