package org.example.InterviewQuestions.ArraysAndStrings;

// Question 1.9: String Rotation
// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, S1 and S2, write code to check if S2 is a rotation of S1 using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").
public class StringRotation {

    // O(n) time, O(n) space I guess.
    public static boolean stringIsRotation(String s1, String s2) {
        if (s1.length() != s2.length() || s1.length() == 0) {
            return false;
        }
        String concatenatedString = s1 + s1;
        return concatenatedString.contains(s2);
    }
}
