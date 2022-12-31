package org.example.InterviewQuestions.ArraysAndStrings;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

// Question 1.2: Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other.
public class CheckPermutation {

    // O(A * log A + B * log B) time complexity
    // O(A + B) space complexity
    public static boolean checkPermutationSortedSolution(String first, String second) {
        if (first.length() != second.length()) {
            return false;
        }
        return sortString(first).equals(sortString(second));
    }

    public static String sortString(String string) {
        char[] chars = string.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }

    // O(A + B) time complexity (where A is length of first, B is length of second).
    // O(A) space complexity.
    public static boolean checkPermutationMapSolution(String first, String second) {
        if (first.length() != second.length()) {
            return false;
        }

        Map<Character, Integer> string1Map = convertStringToCharMap(first);

        for (char c : second.toCharArray()) {
            if (!string1Map.containsKey(c)) {
                return false;
            }
            Integer count = string1Map.get(c);
            count--;
            if (count < 0) {
                return false;
            }
            string1Map.put(c, count);
        }
        return true;
    }

    private static Map<Character, Integer> convertStringToCharMap(String string) {
        Map<Character, Integer> charMap = new HashMap<>();
        for (char c : string.toCharArray()) {
            if (!charMap.containsKey(c)) {
                charMap.put(c, 1);
            } else {
                charMap.put(c, charMap.get(c) + 1);
            }
        }
        return charMap;
    }
}
