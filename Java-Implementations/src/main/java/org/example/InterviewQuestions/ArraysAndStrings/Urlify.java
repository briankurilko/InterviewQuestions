package org.example.InterviewQuestions.ArraysAndStrings;

// Question 1.3: URLify
//  Write a method to replace all spaces in a string with '%20'. You may assume that the string
//  has sufficient space at the end to hold the additional characters, and that you are given the "true"
//  length of the string. (Note: If implementing in Java, please use a character array so that you can
//  perform this operation in place.)
//  EXAMPLE
//  Input:  "Mr John Smith    ", 13
//  Output: "Mr%20John%20Smith"
public class Urlify {

    // O(n^2) time complexity
    // O(1) space complexity
    public static char[] urlify(char[] charArray, int trueLength) {
        for (int i = 0; i < trueLength; ++i) {
            if (Character.isWhitespace(charArray[i])) {
                for (int j = charArray.length - 1; j > i; --j) {
                    charArray[j] = charArray[j - 2];
                }
                charArray[i] = '%';
                charArray[i + 1] = '2';
                charArray[i + 2] = '0';
                i += 2;
            }
        }
        return charArray;
    }

    // O(n) time complexity
    // O(1) space complexity
    public static char[] urlifyOptimized(char[] charArray, int trueLength) {
        int index = charArray.length;

        for (int i = trueLength - 1; i >= 0; --i) {
            if (Character.isWhitespace(charArray[i])) {
                charArray[index - 1] = '0';
                charArray[index - 2] = '2';
                charArray[index - 3] = '%';
                index -= 3;
            } else {
                charArray[index - 1] = charArray[i];
                index--;
            }
        }
        return charArray;
    }
}
