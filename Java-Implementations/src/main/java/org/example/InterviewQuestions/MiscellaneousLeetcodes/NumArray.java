package org.example.InterviewQuestions.MiscellaneousLeetcodes;

// https://leetcode.com/problems/range-sum-query-immutable/description/
public class NumArray {

    private final int[] prefixSum;

    public NumArray(int[] nums) {
        prefixSum = new int[nums.length + 1];
        prefixSum[0] = 0;
        for (int i = 0; i < nums.length; ++i) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }
    }

    public int sumRange(int left, int right) {
        return prefixSum[right + 1] - prefixSum[left];
    }
}
