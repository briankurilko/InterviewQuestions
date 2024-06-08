package org.example.InterviewQuestions.Lists;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ReverseListTest {

    @Test
    void reverseList() {
        Node node = new Node(1);
        node.setNext(new Node(2));
        node.getNext().setNext(new Node(3));
        node.getNext().getNext().setNext(new Node(4));
        node.getNext().getNext().getNext().setNext(new Node(5));
        ReverseList reverseList = new ReverseList();

        Node result = reverseList.reverseList(node);
        result.printList();
    }

    @Test
    void reverseListTwoNodes() {
        Node node = new Node(1);
        node.setNext(new Node(2));
        ReverseList reverseList = new ReverseList();

        Node result = reverseList.reverseList(node);
        result.printList();
    }
}