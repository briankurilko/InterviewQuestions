package org.example.InterviewQuestions.MiscellaneousLeetcodes;

public class KthGrammar {
    public static int kthGrammar(int n, int k) {
        if (n == 1 || k == 1) {
            return 0;
        }
        if (n == 2) {
            return 1;
        }
        if (k == Math.pow(2, n - 1)) {
            if ((n - 1) % 2 == 0) {
                return 0;
            } else {
                return 1;
            }
        }

        int result;
        if (k % 2 == 0) {
            result = kthGrammar(n - 1, k / 2);
            if (result == 0) {
                return 1;
            }
            return 0;
        } else {
            result = kthGrammar(n - 1, (k / 2) + 1);
            if (result == 0) {
                return 0;
            }
            return 1;
        }
    }
}
