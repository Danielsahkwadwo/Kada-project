# Kada Backend

## Overview

Kada Backend is a server-side application designed to support the Kada platform. It is built using Node.js and Express.js, providing APIs and functionalities for user authentication, profile management, ride booking, and more. The backend leverages MongoDB for data storage and integrates various third-party services like Firebase, Cloudinary, and Twilio for enhanced functionalities.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Features](#features)
- [Usage](#usage)
- [Endpoints](#endpoints)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AkambongMatthewAbugdag23/KADA.git
   ```
2. Navigate to the project directory:
   ```bash
   cd kada-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory and provide the necessary environment variables:

```plaintext
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUD_NAME=your_cloudinary_cloud_name
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_pass
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
```

## Features

- **User Authentication**: Registration, login, and JWT-based authentication for different user roles (passenger, rider, admin).
- **Profile Management**: Update user profiles, including uploading profile pictures.
- **Ride Booking**: Request, accept, and manage rides.
- **Ratings**: Rate drivers and rides.
- **Notifications**: Send notifications via email and SMS.

## Usage

Start the server:

```bash
npm start
```

The server will be running at `http://localhost:3000`.

## Endpoints

Here are some of the key endpoints available in the Kada Backend:

- **Auth**
  - `POST /auth/login`: Login to the platform.
  - `POST /auth/logout`: Logout from the platform.

- **Rides**
  - `POST /rides/request`: Request a new ride.
  - `GET /rides`: Get rides for the logged-in user.

- **Ratings**
  - `POST /ratings/rate-driver`: Rate a driver.
  - `POST /ratings/rate-ride`: Rate a ride.

For a complete list of endpoints and their details, refer to the API documentation.

# Kada-project
