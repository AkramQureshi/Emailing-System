# Emailing-System
Key Features of the Emailing System Project:

Authentication (login.ts): This feature ensures secure access by requiring a valid user ID and password. Successful authentication grants access to the Emailing System, while incorrect credentials result in denied access.

Email Formatting (main.ts): This file is dedicated to designing email formatting, ensuring consistent and professional presentation in outgoing emails.

Recipient Lists (emailArray.ts): Utilizing two arrays, this feature manages the list of email addresses for recipients, including primary recipients (To) and carbon copy recipients (CC).

Message Content (emailBody.ts): Here, the message content is tailored for recipients. Additionally, a text limit validation feature prevents exceeding the specified limit, triggering an error message if exceeded.

Timestamps: Automatically included in the system, the current date and time provide reference points for correspondence.

Modular Design: Leveraging modules, this design ensures efficient file management. Login validation is imported from emailLogin.ts. Email addresses are imported from emailArray.ts, while message content is imported from emailBody.ts.

Customization: Users have full control over customization:
Easily update the list of email addresses by editing the emailArray.ts file.
Make changes or amendments to email content by modifying the emailBody.ts file.

These features collectively offer users flexibility and simplicity in maintaining the Emailing System.
