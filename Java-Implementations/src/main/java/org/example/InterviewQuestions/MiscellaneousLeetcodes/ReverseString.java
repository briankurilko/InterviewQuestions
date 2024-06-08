package org.example.InterviewQuestions.MiscellaneousLeetcodes;

public class ReverseString {

    public char[] reverseString(char[] string) {
        return helper(string, 0, string.length - 1);
    }

    private char[] helper(char[] string, int minIndex, int maxIndex) {
        if (minIndex >= maxIndex) {
            return string;
        }
        char temp = string[minIndex];
        string[minIndex] = string[maxIndex];
        string[maxIndex] = temp;
        return helper(string, ++minIndex, --maxIndex);
    }
}
