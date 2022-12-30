package org.example.InterviewQuestions.ArraysAndStrings;

import java.util.LinkedList;

// Question 1.6: String Compression
// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z)
public class StringCompression {

    // O(n) time, O(n) space. Remember to use StringBuilder instead of character arrays here, also.
    // There's some auto-boxing but I think that was basically unavoidable, the book does it too.
    // The one optimization here is that we could calculate the size of the compressed string before we actually
    // compressed it, saving on space if the string will be smaller. But that's not really a big deal.
    public static String compressString(String string) {
        if (string.length() == 0) {
            return string;
        }
        StringBuilder compressedString = new StringBuilder();
        Character currentChar = null;
        int count = 1;
        for (int i = 0; i < string.length(); ++i) {
            Character letter = string.charAt(i);
            if (letter.equals(currentChar)) {
                ++count;
            } else {
                if (currentChar != null) {
                    compressedString.append(currentChar);
                    compressedString.append(count);
                }
                currentChar = letter;
                count = 1;
            }
        }
        compressedString.append(currentChar);
        compressedString.append(count);
        return compressedString.length() >= string.length() ? string : compressedString.toString();
    }

}
