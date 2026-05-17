package factory;

public class SMSNotification implements Notification, Notification {
	public SMSNotification() {
		System.out.println("SMSNotification Object Created...");
	}
	public void send() {
		System.out.println("SmsNotification sent...");
	}

}