package org.example.InterviewQuestions.Lists;

public class ReverseList {
    public Node reverseList(Node head) {
        if (head == null || head.getNext() == null) {
            return head;
        }
        Node result = helper(head, head.getNext());
        System.out.println(result.getData());
        return result;
    }

    private Node helper(Node previous, Node current) {
        if (current.getNext() == null) {
            current.setNext(previous);
            previous.setNext(null);
            return current;
        }
        Node next = current.getNext();
        Node result = helper(current, next);
        current.setNext(previous);
        previous.setNext(null);
        return result;
    }
}
