package org.example.InterviewQuestions.ArraysAndStrings;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class RotateMatrixTest {

    @Test
    void rotateMatrix() {
        String[][] matrix = {
                {"a", "b", "c", "d"},
                {"e", "f", "g", "h"},
                {"i", "j", "k", "l"},
                {"m", "n", "o", "p"}
        };

        String[][] expected = {
                {"m", "i", "e", "a"},
                {"n", "j", "f", "b"},
                {"o", "k", "g", "c"},
                {"p", "l", "h", "d"}
        };

        RotateMatrix.rotateMatrix(matrix);
        assertEquals(Arrays.deepToString(expected), Arrays.deepToString(matrix));
    }

    @Test
    void rotateMatrix_smallerMatrix() {
        String[][] matrix = {
                {"a", "b"},
                {"c", "d"},
        };

        String[][] expected = {
                {"c", "a"},
                {"d", "b"},
        };

        RotateMatrix.rotateMatrix(matrix);
        assertEquals(Arrays.deepToString(expected), Arrays.deepToString(matrix));
    }

    @Test
    void rotateMatrix_biggerMatrix() {
        String[][] matrix = {
                {"a", "b", "c", "d", "e", "1", "12", "1", "30"},
                {"f", "g", "h", "i", "j", "2", "13", "2", "31"},
                {"k", "l", "m", "n", "o", "3", "14", "3", "32"},
                {"p", "q", "r", "s", "t", "4", "15", "4", "33"},
                {"u", "v", "w", "x", "y", "5", "16", "5", "34"},
                {"6", "7", "8", "9", "10", "11", "17", "6", "35"},
                {"18", "19", "20", "21", "22", "23", "24", "7", "36"},
                {"25", "26", "27", "28", "29", "30", "31", "8", "37"},
                {"50", "51", "52", "53", "54", "55", "56", "57", "58"},
        };

        String[][] expected = {
                {"50", "25", "18", "6", "u", "p", "k", "f", "a"},
                {"51", "26", "19", "7", "v", "q", "l", "g", "b"},
                {"52", "27", "20", "8", "w", "r", "m", "h", "c"},
                {"53", "28", "21", "9", "x", "s", "n", "i", "d"},
                {"54", "29", "22", "10", "y", "t", "o", "j", "e"},
                {"55", "30", "23", "11", "5", "4", "3", "2", "1"},
                {"56", "31", "24", "17", "16", "15", "14", "13", "12"},
                {"57", "8", "7", "6", "5", "4", "3", "2", "1"},
                {"58", "37", "36", "35", "34", "33", "32", "31", "30"}
        };

        RotateMatrix.rotateMatrix(matrix);

        assertEquals(Arrays.deepToString(expected), Arrays.deepToString(matrix));
    }
}