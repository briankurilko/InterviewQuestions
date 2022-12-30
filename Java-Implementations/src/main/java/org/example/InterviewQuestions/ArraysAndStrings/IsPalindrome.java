package org.example.InterviewQuestions.ArraysAndStrings;

import java.util.HashMap;
import java.util.Map;

// Question 1.4: Palindrome Permutation
//  Given a string, write a function to check if it is a permutation of a palindrome.
//  A palindrome is a word or phrase that is the same forwards and backwards. A permutation
//  is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)
public class IsPalindrome {

    // O(n) time, O(n) space.
    public static boolean isPalindrome(String string) {
        Map<Character, Integer> characterIntegerMap = convertStringToCharMap(string);

        boolean hasOddCharacterCount = false;
        for (Integer count : characterIntegerMap.values()) {
            if (count % 2 != 0) {
                if (hasOddCharacterCount) {
                    return false;
                }
                hasOddCharacterCount = true;
            }
        }
        return true;
    }

    private static Map<Character, Integer> convertStringToCharMap(String string) {
        Map<Character, Integer> charMap = new HashMap<>();
        for (char c : string.toCharArray()) {
            if (!Character.isWhitespace(c)) {
                char lowercased = Character.toLowerCase(c);
                if (!charMap.containsKey(lowercased)) {
                    charMap.put(lowercased, 1);
                } else {
                    charMap.put(lowercased, charMap.get(lowercased) + 1);
                }
            }
        }
        return charMap;
    }
}
