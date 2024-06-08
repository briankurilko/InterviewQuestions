package org.example.InterviewQuestions.MiscellaneousLeetcodes;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PascalsTriangle {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> row = new ArrayList<>(rowIndex + 1);
        List<List<Integer>> memo = new ArrayList<>();
        for (int i = 0; i <= rowIndex; ++i) {
            memo.add(new ArrayList<>());
        }
        for (int i = 0; i <= rowIndex; ++i) {
            row.add(calculatePascalIndexMemoized(i, rowIndex, memo));
        }
        return row;
    }

    private Integer calculatePascalIndexMemoized(int i, int j, List<List<Integer>> memo) {
        if (memo.get(i).get(j) != null) {
            return memo.get(i).get(j);
        }
        if (i == 0 || j == i) {
            return 1;
        }
        Integer result = calculatePascalIndexMemoized(i - 1, j - 1, memo) + calculatePascalIndexMemoized(i, j - 1, memo);
        memo.get(i).add(j, result);
        return result;

    }
}
