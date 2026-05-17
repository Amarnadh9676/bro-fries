package Factory;

public class EmailNotification implements Notification {
	
	public EmailNotification() {
		System.out.println("EmailNotification Object Created...");
		// TODO Auto-generated constructor stub
	}
	public void send() {
		System.out.println("EmailNotification Sent...");
	}

}