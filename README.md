<img width="1680" alt="Screenshot 2024-03-17 at 3 04 38 AM" src="https://github.com/tech-threee/patient-swiftcare/assets/86974174/012d81be-e781-48b8-b50f-88d69308c00c"># Patient Console
This repository contains the console for the patient of the hospital. This console is primarily for paitent to get their medical records, book appointement, health blog (many more, but we stick with these 4 for now).


NB: For the first release of this software, the features currently available are
- Getting Health Blog
- Book Appointement
- Account authentication and management
- Medical Records

## How To Access
The software is hosted using Netlify using [this url](https://swiftcare-connect.netlify.app/)

## How To Use 
1. In order to get acces to the application, one would have to login by providing a `Email` and a `Otp Code`
![](/screenshots/login.png)

2. After logging in, the user will see the Home page which is a summary of the hospital view.
![](/screenshots/dashboard.png)

3. From there, they can visit the health page to view blog, appointement page to book appointement

4. They can visit the profile page to view details about their medical record and data.

The long-term goal of the software is to include features to allow the user view the leave schedules of emplyees, renew their hospital card, chat with virtually with their health assistance, include hospital payment and mobile application version.


## Stack
This software was built using 
1. [React]((https://react.dev/))
2. [TailwindCSS](https://tailwindcss.org/)
3. [Vite](https://vitejs.dev/)

## Design System
Because this system is part of a software suite (SwiftCare Connec+), it shares the same design and components as the other consoles of the software suite however, the only different is that the primary color is purple - `#9C27B0`
