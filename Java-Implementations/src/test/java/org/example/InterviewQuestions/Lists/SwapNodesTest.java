package org.example.InterviewQuestions.Lists;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SwapNodesTest {

    @Test
    void swapPairs() {
        Node node = new Node(1);
        node.setNext(new Node(2));
        node.getNext().setNext(new Node(3));
        node.getNext().getNext().setNext(new Node(4));
        SwapNodes swapNodes = new SwapNodes();

        Node result = swapNodes.swapPairs(node);
        result.printList();
        Node list2 = Node.convertArrayToList(new int[]{2, 1, 4, 3});
        assertTrue(result.listsAreEqual(list2));
    }
}