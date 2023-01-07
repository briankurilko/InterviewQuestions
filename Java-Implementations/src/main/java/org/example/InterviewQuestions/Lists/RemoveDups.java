package org.example.InterviewQuestions.Lists;

import java.util.HashSet;
import java.util.Set;

// 2.1: Remove Dups
// Write code to remove duplicates from an unsorted linked list.
public class RemoveDups {

    // O(n) time, O(n) space.
    public static void removeDupsSetImpl(Node node) {
        Set<Integer> elementsFound = new HashSet<>();
        Node current = node;
        Node previous = null;
        while (current != null) {
            if (elementsFound.contains(current.getData())) {
                previous.setNext(current.getNext());
            } else {
                elementsFound.add(current.getData());
                previous = current;
            }
            current = current.getNext();
        }
    }

    // O(n^2) time, O(1) space.
    public static void removeDupsNoBuffer(Node node) {
        Node previous = null;

        for (Node current = node; current != null; current = current.getNext()) {
            previous = current;
            for (Node next = current.getNext(); next != null; next = next.getNext()) {
                if (current.getData() == next.getData()) {
                    previous.setNext(next.getNext());
                } else {
                    previous = next;
                }
            }
        }
    }
}
