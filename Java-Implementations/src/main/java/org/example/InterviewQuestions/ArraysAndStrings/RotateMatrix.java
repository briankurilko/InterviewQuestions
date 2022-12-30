package org.example.InterviewQuestions.ArraysAndStrings;

// Question 1.7: Rotate Matrix
//  Given an image represented by an NxN matrix, where each pixel in the image is 4
//  bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
public class RotateMatrix {

    // O(n) time, O(1) space. Pretty hard to code! But the offset/unit tests help a lot.
    // Honestly can't believe I got it so quickly!
    public static void rotateMatrix(String[][] matrix) {
        int layer = 0;
        int col = 0;
        int offset = 1;
        while (layer < matrix.length / 2) {
            rotateCells(matrix, layer, col);
            col++;
            if (col > matrix[0].length - 1 - offset) {
                col = offset;
                layer++;
                offset++;
            }
        }
    }

    private static void rotateCells(String[][] matrix, int layer, int col) {
        String temp = matrix[layer][col];
        matrix[layer][col] = matrix[matrix.length - 1 - col][layer];
        matrix[matrix.length - 1 - col][layer] = matrix[matrix.length - 1 - layer][matrix[0].length - 1 - col];
        matrix[matrix.length - 1 - layer][matrix[0].length - 1 - col] = matrix[col][matrix[0].length - 1 - layer];
        matrix[col][matrix[0].length - 1 - layer] = temp;
    }
}
