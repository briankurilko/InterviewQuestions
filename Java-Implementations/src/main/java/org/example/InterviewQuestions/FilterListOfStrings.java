package org.example.InterviewQuestions;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FilterListOfStrings {

    private static final Pattern FILTER = Pattern.compile(".*(\\d+|[A-Z]+|[#;%$@-]+).*");

    public List<String> filterList(List<String> listToFilter) {
        return listToFilter.stream()
                .flatMap(string -> Stream.of(string.split("[ ,]+")))
                .filter(string -> {
                    Matcher matcher = FILTER.matcher(string);
                    return matcher.matches();
                }).collect(Collectors.toList());
    }
}
