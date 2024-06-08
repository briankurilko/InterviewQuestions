package org.example.InterviewQuestions.MiscellaneousLeetcodes;

import java.util.Map;
import java.util.function.Function;

import static java.util.stream.Collectors.counting;
import static java.util.stream.Collectors.groupingBy;

public class RansomNote {
    public boolean canConstruct(String ransomNote, String magazine) {
        Map<Character, Long> characterToCount = magazine.chars()
                .mapToObj(i -> (char) i)
                .collect(groupingBy(Function.identity(), counting()));
        for (char i : ransomNote.toCharArray()) {
            Long currentCount = characterToCount.getOrDefault(i, 0L);
            if (currentCount.equals(0L)) {
                return false;
            }
            characterToCount.put(i, characterToCount.get(i) - 1);
        }
        return true;
    }
}
