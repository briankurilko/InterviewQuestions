package org.example.InterviewQuestions.MiscellaneousLeetcodes;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PowerTest {

    @Test
    void myPowZeroBaseCase() {
        double result = Power.myPow(1.5, 0);
        assertEquals(1.0, result);
    }

    @Test
    void myPowOneBaseCase() {
        double result = Power.myPow(1.5, 1);
        assertEquals(1.5, result);
    }

    @Test
    void myPowNegativeOneBaseCase() {
        double result = Power.myPow(2, -1);
        assertEquals(0.5, result);
    }

    @Test
    void myPow() {
        double result = Power.myPow(2.0, 20);
        assertEquals(1048576, result);
    }

    @Test
    void myPowNegative() {
        double result = Power.myPow(2.0, -20);
        assertEquals(9.5367431640625E-7, result);
    }

    @Test
    void myPowTest() {
        double result = Power.myPow(2.10000, 3);
        assertEquals(9.261000000000001, result);
    }

    // 0.00001
    //2147483647
    @Test
    void myPowTestTwo() {
        double result = Power.myPow(0.00001, 2147483647);
        assertEquals(0, result);
    }
    // 1.00000
    //-2147483648
    @Test
    void myPowTestThree() {
        double result = Power.myPow(1.0, -2147483648);
        assertEquals(1.0, result);
    }
}