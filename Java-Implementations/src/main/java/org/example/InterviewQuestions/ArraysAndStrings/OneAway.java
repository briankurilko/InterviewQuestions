package org.example.InterviewQuestions.ArraysAndStrings;

// Question 1.5: One Away
// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// EXAMPLE
//  pale, ple -> true
//  pales, pale -> true
//  pale, bale -> true
//  pale, bake -> false
public class OneAway {

    // O(n) time, where n is the length of the shortest string.
    // O(1) space.
    public static boolean oneAway(String first, String second) {
        if (first.length() == second.length()) {
            return oneEditReplace(first, second);
        }
        if (first.length() - 1 == second.length()) {
            return oneEditInsert(second, first);
        }
        if (second.length() - 1 == first.length()) {
            return oneEditInsert(first, second);
        }
        return false;
    }

    private static boolean oneEditReplace(String first, String second) {
        boolean hasOneDifference = false;
        for (int i = 0; i < first.length(); ++i) {
            if (first.charAt(i) != second.charAt(i)) {
                if (hasOneDifference) {
                    return false;
                }
                hasOneDifference = true;
            }
        }
        return true;
    }

    // so if the longer string and shorter string are different, then we advance
    // the long string's index by one, skipping the extra character. We also leave the short string index where its at,
    // so we can compare it again to the next element of the long string.
    // If we skip over the long string's index more than once, then we know there are more than 1 difference between
    // the strings, so we return false.
    private static boolean oneEditInsert(String shortString, String longString) {
        int longIndex = 0, shortIndex = 0;
        while (longIndex < longString.length() && shortIndex < shortString.length()) {
            if (shortString.charAt(shortIndex) != longString.charAt(longIndex)) {
                if (longIndex - shortIndex > 0) {
                    return false;
                }
                ++longIndex;
            } else {
                ++longIndex;
                ++shortIndex;
            }
        }
        return true;
    }
}
