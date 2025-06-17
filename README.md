🚗 TruTrack – Real-Time Vehicle Tracking Dashboard
TruTrack is a responsive, real-time vehicle tracking dashboard designed for anti-theft monitoring and fleet management. It displays live data such as GPS location, speed, ignition status, battery level, and GSM signal directly from IoT devices like ESP32-based systems. All data is synced through Firebase Realtime Database.

🔧 Features
Live GPS Tracking
View your vehicle's current location on an interactive map in real-time.

Speed Monitoring
Displays the current speed with regular updates.

Geo-Fencing (UI Ready)
Interface for setting safe zones and detecting zone exits (future backend integration possible).

Vehicle Status Display

Ignition (On/Off)

Movement status (Moving/Stopped)

Battery Level %

GSM Signal %

Distance Tracker
Track total distance traveled per device for the current month.

Alerts Section
Placeholder to manage over-speeding, geo-fencing, and other alerts.

Analytics Panel
Speed and route history visualization (planned for future version).

Authentication System
Login and register pages included for personalized access.

🔌 Data Structure (Firebase)
Example of stored data:

json
Copy
Edit
{
  "bno055": {
    "dataSource": "gps",
    "latitude": 21.16399,
    "longitude": 72.7837,
    "speed": 0,
    "timestamp": 593650
  }
}
📁 Project Structure
bash
Copy
Edit
TruTrack/
├── index.html            # Main dashboard
├── login.html            # Sign-in and registration pages
├── firebase-config.js    # Firebase initialization
├── script.js             # Fetching data from Firebase
├── style.css             # UI styling
├── /assets               # Icons, images, fonts
└── README.md             # Project description
🧠 Technologies Used
HTML, CSS, JavaScript (Frontend)

Firebase Realtime Database

Google Maps (for location display)

ESP32 + GPS + IMU (Data source)

🛠️ Setup Instructions
Clone this repository.

Create a Firebase project and enable Realtime Database.

Replace Firebase config values in firebase-config.js.

Deploy files to a hosting platform (e.g. GitHub Pages, Vercel, Firebase Hosting).

Connect ESP32 device to send GPS/IMU data to Firebase in correct structure.

📈 Future Enhancements
OTP-based secure login

Historical route replay

Driver behavior analytics

SMS/email alert integration

Mobile app version

👨‍💻 Developed By
Darshan Nathvani
Final Year Electronics & Communication Engineer
Real-Time Embedded & IoT Systems Developer
