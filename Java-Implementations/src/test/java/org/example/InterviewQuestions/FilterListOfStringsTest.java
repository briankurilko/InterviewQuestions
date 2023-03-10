package org.example.InterviewQuestions;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class FilterListOfStringsTest {

    private FilterListOfStrings filterListOfStrings;
    @BeforeEach
    void setUp() {
        filterListOfStrings = new FilterListOfStrings();
    }

    @Test
    @DisplayName("Filter returns empty list when empty list is passed in.")
    void filterReturnsEmptyListWhenEmptyListIsPassedIn() {
        assertEquals(Collections.emptyList(), filterListOfStrings.filterList(new ArrayList<>()));
    }

    @Test
    @DisplayName("Filter returns empty list when it receives all lowercase strings.")
    void filterReturnsEmptyListWhenReceivesAllLowercaseStrings() {
        assertEquals(Collections.emptyList(), filterListOfStrings.filterList(List.of("abcd", "efgh")));
    }

    @Test
    @DisplayName("Filter returns list of one string with a number in it.")
    void filterReturnsListOfOneStringWithNumber() {
        assertEquals(List.of("abc2"), filterListOfStrings.filterList(List.of("abc2")));
    }

    @Test
    @DisplayName("Filter returns list of strings with numbers in it.")
    void filterReturnsListOfStringsWithNumbers() {
        assertEquals(List.of("abc1", "abc2waedrsf"), filterListOfStrings.filterList(List.of("abc1", "abc2waedrsf", "asdpifuasdf")));
    }

    @Test
    @DisplayName("Filter returns list of strings with uppercase characters")
    void filterReturnsListOfStringsWithUppercaseCharacters() {
        assertEquals(List.of("aBc", "FbcadsvsadEfasdf"), filterListOfStrings.filterList(List.of("aBc", "FbcadsvsadEfasdf", "abc")));
    }

    @Test
    @DisplayName("Filter returns list of strings with special characters")
    void filterReturnsListOfStringsWithSpecialCharacters() {
        assertEquals(List.of("asdfg#poih", "dsf;sadf"), filterListOfStrings.filterList(List.of("asdfg#poih", "dsf;sadf", "abc")));
    }

    @Test
    @DisplayName("Filter returns list of strings with special characters")
    void filterReturnsListOfStringsWithNumbersUppercaseAndSpecialCharacters() {
        assertEquals(List.of("aBc", "dsf;sadf", "abc2waedrsf"), filterListOfStrings.filterList(List.of("aBc", "dsf;sadf", "abc2waedrsf", "abc")));
    }

    @Test
    @DisplayName("Filter returns list of strings with comma separation")
    void filterReturnsListOfStringsWithCommaSeparation() {
        assertEquals(List.of("Efg"), filterListOfStrings.filterList(List.of("abc,Efg")));
    }

    @Test
    @DisplayName("Filter returns list of strings with space separation")
    void filterReturnsListOfStringsWithSpaceSeparation() {
        assertEquals(List.of("Efg"), filterListOfStrings.filterList(List.of("abc Efg")));
    }

    @Test
    @DisplayName("Filter returns list of strings with space and comma separation")
    void filterReturnsListOfStringsWithSpaceAndCommaSeparation() {
        assertEquals(List.of("Efg", "ASDF"), filterListOfStrings.filterList(List.of("abc Efg,asdf,     ,,,ASDF")));
    }
}