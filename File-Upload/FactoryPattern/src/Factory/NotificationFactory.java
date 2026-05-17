package Factory;

public class NotificationFactory {
	public static EmailNotification createNotifiaction(String type) {
		if(type.equalsIgnoreCase("EMAIL")) {
			return new EmailNotification();
		}
		
		if(type.equalsIgnoreCase("SMS")) {
			return new SMSNotification();
			
		}
		if(type.equalsIgnoreCase("WhatsApp")) {
			return new WhatsApp();
		}
		
	
		return null;
		
	}

}