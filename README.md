# Xero Bulk Void Invoice Tool

### The vision
Bulk voiding invoices isn't currently available in Xero. I never like hearing things aren't possible and dreamed of how I'd implement a solution. This has been a feature request for multiple years and new invoicing hasn't reached cruising speed yet. I'm hoping this app is going to help some users in the meantime.

### Sounds good, how do I use it?

1. Navigate to "URL goes here"
2. Authenticate to Xero, and on the homepage browse all authenticated invoices
3. Select invoices you wish to void then click the 'Void All' button
4. They're now voided! Wahoo!

## Goals 

### MVP 
- Create an easy to use app where all authorised invoices, without payments, display in a table (partly paid/paid invoices cannot be voided) - Done
- As a user I want to easily find and select invoices I wish to void (a select all function to save clicks) - Done
- When clicking void, I expect all selected invoices to be voided and some kind of prompt to let me know it was successful.

### Stretch goals
1. Table filtering 
2. CSS styling - Done
3. Saving user sessions
4. Implementing paging to reduce API calls
5. Format dates to exclude time - Done

### Extra Stretch
Moving to React for a smoother experience

### Running the Tool

```
yarn install
yarn start
```
You should now see the prompt `listening on http://localhost:3100`.  Browse there and enjoy.
