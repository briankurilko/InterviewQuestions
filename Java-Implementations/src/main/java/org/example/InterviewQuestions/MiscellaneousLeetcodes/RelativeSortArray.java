package org.example.InterviewQuestions.MiscellaneousLeetcodes;

import java.util.Arrays;
import java.util.Map;
import java.util.TreeMap;
import java.util.function.Function;
import java.util.stream.Collectors;

// O(n log n) time O(n) space.
public class RelativeSortArray {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        Map<Integer, Long> intsToNumOccurrences = Arrays.stream(arr1)
                .boxed()
                .collect(Collectors.groupingBy(Function.identity(), TreeMap::new, Collectors.counting()));
        int[] result = new int[arr1.length];
        int arr1Pointer = 0;
        for (int i : arr2) {
            long c = 0;
            Long occurrences = intsToNumOccurrences.get(i);
            if (occurrences != null) {
                while (c < occurrences) {
                    result[arr1Pointer] = i;
                    ++c;
                    ++arr1Pointer;
                }
            }
            intsToNumOccurrences.remove(i);
        }
        for ( Map.Entry<Integer, Long> entry : intsToNumOccurrences.entrySet()) {
            long c = 0;
            while (c < entry.getValue()) {
                result[arr1Pointer] = entry.getKey();
                ++arr1Pointer;
                ++c;
            }
        }
        return result;
    }
}
