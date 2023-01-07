package org.example.InterviewQuestions.Lists;

public class Node {

    private int data;
    private Node next;

    public Node(int data) {
        this.data = data;
    }

    public void printList() {
        Node current = this;
        while (current != null) {
            System.out.print(current.getData());
            System.out.print("->");
            current = current.getNext();
        }
        System.out.println();
    }

    public static Node convertArrayToList(int[] arr) {
        Node list = null;
        Node cursor = null;
        for (int i : arr) {
            if (list == null) {
                list = new Node(i);
                cursor = list;
            } else {
                Node next = new Node(i);
                cursor.setNext(next);
                cursor = next;
            }
        }
        return list;
    }

    public boolean listsAreEqual(Node list) {
        if (list == null) {
            return false;
        }
        Node cursor1 = this;
        Node cursor2 = list;
        while (cursor1 != null && cursor2 != null) {
            if (cursor1.getData() != cursor2.getData()) {
                return false;
            }
            cursor1 = cursor1.getNext();
            cursor2 = cursor2.getNext();
        }
        if (cursor1 != null || cursor2 != null) {
            return false;
        }
        return true;
    }

    public void setData(int data) {
        this.data = data;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    public int getData() {
        return data;
    }

    public Node getNext() {
        return next;
    }
}
