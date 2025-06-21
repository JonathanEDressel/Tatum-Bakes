# Tatum-Bakes
My wife's baking website. Simple MERN stack website for her business. 

# To-Do:
- Setup UI for the pages
- Add images for pages needed
- Setup MongoDb back end.
- Create UserInfo contacts table.
- Store emails and user information in the back end.
- Add securities for .env variables (not sure if needed or not. Needs further research)
- ~~Add rate limiting to email service~~
- ~~Block headless browsers (automated emails being sent)~~
- ~~Figure out if I need backend at all~~
- ~~Add email service~~
- ~~Create UI for Contact page~~
- ~~Add image templates to test out UI for Home page~~

# Dev Personal Notes
5/6/2025 
- We can use the emails saved to provide as a tool for a blacklist, reference, or just history. I definitely want to use it as a blacklist if a user spams too many emails and somehow bypasses the rate limiting feature. Just do a quick lookup to the db and make sure their email isn't in the blacklist. EmailJs allows this... it's pretty dang cool!
- https://www.emailjs.com/docs/sdk/init/

- Well I read the rest of the code from the link above and realized that it includes a rateLimiting function built-in. Made it easy for me. Still need to add that black list on the backend and pass it to the front end. Pretty cool!

- UserInfo table (rough draft)
    (PK) int ID
    varchar_100 first_name
    varchar_100 last_name
    varchar_100 email_address
    varchar_100 phone_number
    varchar_500 order_details

5/5/2025 - I'm not user I'll need the backend. Seems pointless to have for now but I haven't deleted it out of percaution that there will be a case for it. Also, rate limiting needs to be added and maybe add some other minor security percautions with .env vairables. The below article seems helpful with the .env problem. I'll check it out when I have time.
- https://medium.com/swlh/keeping-env-variables-private-in-react-app-fa44a9b33c31
