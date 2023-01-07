package org.example.InterviewQuestions.Lists;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RemoveDupsTest {

    @Test
    void removeDupsSetImpl() {
        Node list = Node.convertArrayToList(new int[]{1, 2, 2, 2, 3, 3, 4, 5, 5, 5});
        Node list2 = Node.convertArrayToList(new int[]{1, 2, 3, 4, 5});
        RemoveDups.removeDupsSetImpl(list);
        assertTrue(list.listsAreEqual(list2));
    }

    @Test
    void removeDupsNoBuffer() {
        Node list = Node.convertArrayToList(new int[]{1, 2, 2, 2, 3, 3, 4, 5, 5, 5});
        Node list2 = Node.convertArrayToList(new int[]{1, 2, 3, 4, 5});
        RemoveDups.removeDupsNoBuffer(list);
        assertTrue(list.listsAreEqual(list2));
    }
}