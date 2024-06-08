package org.example.InterviewQuestions.MiscellaneousLeetcodes;

// Base case: n = 0? I guess? And n == 1. And maybe -1?
// Recurrence relation: n
public class Power {
    public static double myPow(double x, int n) {
        return helper(x, n);
    }

    private static double helper(double x, long n) {
        if (n == 0) {
            return 1;
        }
        if (n < 0) {
            return 1 / helper(x, n * -1);
        }
        boolean odd = n % 2 != 0;
        if (odd) {
            return x * helper(x * x, (n - 1) / 2);
        }
        return helper(x * x, n / 2);
    }

}
