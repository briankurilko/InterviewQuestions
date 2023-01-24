package org.example.InterviewQuestions.MiscellaneousLeetcodes;

// https://leetcode.com/problems/range-sum-query-2d-immutable/
public class NumMatrix {
    private final int[][] prefixSum2D;
    public NumMatrix(int[][] matrix) {
        prefixSum2D = new int[matrix.length + 1][matrix[0].length + 1];
        // alright. 2D prefix sum. Wonder how you do that.
        for (int i = 0; i < matrix.length; ++i) {
            for (int j = 0; j < matrix[0].length; ++j) {
                if (i == 0 || j == 0) {
                    prefixSum2D[i][j] = 0;
                } else {
                    prefixSum2D[i][j] = prefixSum2D[i - 1][j] + prefixSum2D[i][j - 1] - prefixSum2D[i - 1][j - 1] + matrix[i][j];
                }
            }
        }
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
        return prefixSum2D[row2][col2] - prefixSum2D[row1 - 1][col2] - prefixSum2D[row2][col1 - 1] + prefixSum2D[row1 - 1][col1 - 1];
    }
}
