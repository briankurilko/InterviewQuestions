package org.example.InterviewQuestions.Lists;

public class SwapNodes {
    public Node swapPairs(Node head) {
        if (head == null || head.getNext() == null) {
            return head;
        }
        Node first = head.getNext();
        head.setNext(swapPairs(head.getNext().getNext()));
        first.setNext(head);
        return first;
    }
}
