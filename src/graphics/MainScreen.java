package graphics;

import javax.swing.*;

public class MainScreen extends JFrame {
    public MainScreen() {
        super("Billiards");
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setExtendedState(JFrame.MAXIMIZED_BOTH);
        this.setVisible(true);
    }
}
