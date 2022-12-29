package org.example.InterviewQuestions.ArraysAndStrings;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

// Question 1.1
// Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?
// ---------------------------------------------------------------------------------------
// Good questions to ask here:
// What is the size of our alphabet?
// Do we need to worry about capitalization?
public class IsUnique {

    // O(n) time, O(n) space.
    public static boolean isUniqueSetImplementation(String string) {
        Set<Character> charSet = new HashSet<>();

        // Doing auto-unboxing here, so this is doing extra work that it doesn't have to do.
        // If we know the size of the alphabet we're using, we can use a boolean array, with each bit associated
        // with the letter in the alphabet we're using, and set the bits to "true" if we've seen them before.
        // That way, we could avoid the auto-unboxing here (though the set implementation works with any alphabet)
        for (Character c : string.toCharArray()) {
            if (charSet.contains(c)) {
                return false;
            }
            charSet.add(c);
        }
        return true;
    }

    // O(n^2) time, O(1) space
    public static boolean isUniqueIterativeImplementation(String string) {
        for (int i = 0; i < string.length(); ++i) {
            for (int j = i + 1; j < string.length(); ++j) {
                if (string.charAt(i) == string.charAt(j)) {
                    return false;
                }
            }
        }
        return true;
    }

    // O(n * log(n)) time, O(n) space. Would be O(1) space if we could pass in a char array instead of a string.
    public static boolean isUniqueSortedImplementation(String string) {
        char[] chars = string.toCharArray();
        Arrays.sort(chars);

        for (int i = 0; i < chars.length - 1; ++i) {
            if (chars[i] == chars[i + 1]) {
                return false;
            }
        }
        return true;
    }
}
