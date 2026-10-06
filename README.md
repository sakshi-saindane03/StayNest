# StayNest 🏡

StayNest is a full-stack accommodation discovery and listing platform. Users can explore accommodation listings, search by location, filter properties by categories, view reviews and map locations, and create, edit, and delete their own listings with images.

🔗 **Live Demo:** [staynest-otm0.onrender.com/listings](https://staynest-otm0.onrender.com/listings)

> The app is hosted on Render's free tier, so the first load may take 30–60 seconds while the server wakes up.

---

## 🚀 Features

- Browse all accommodation listings and view details of each one
- Search listings by location
- Filter listings by categories
- Create, edit, and delete listings (full CRUD)
- Reviews on listings
- User authentication and authorization (sign up, log in, log out) with Passport.js
- Image upload for listings using Multer and Cloudinary
- Map and geocoding integration using Mapbox
- Server-side form validation using Joi
- Session management stored in MongoDB (connect-mongo)
- Flash messages for success and error feedback
- Reusable EJS layouts, navbar, and footer using EJS-Mate
- Responsive UI built with Bootstrap and custom CSS
- Deployed on Render

---

## 🛠️ Tech Stack

| Layer            | Technologies                                         |
| ---------------- | ---------------------------------------------------- |
| Frontend         | HTML, CSS, JavaScript, Bootstrap, EJS, EJS-Mate      |
| Backend          | Node.js, Express.js                                  |
| Database         | MongoDB, Mongoose                                    |
| Authentication   | Passport, passport-local, passport-local-mongoose    |
| Sessions         | express-session, connect-mongo, connect-flash        |
| Validation       | Joi                                                  |
| File uploads     | Multer, multer-storage-cloudinary, Cloudinary        |
| Maps             | Mapbox SDK                                           |
| Misc             | method-override, cookie-parser, dotenv               |
| Hosting          | Render                                               |

---

## 📂 Project Structure

```
StayNest/
│
├── controllers/      # Route handler logic
├── init/             # Database seed data and initialization script
├── models/           # Mongoose schemas
├── public/           # Static assets (CSS, JS, images)
├── routes/           # Express route definitions
├── utils/            # Helper utilities (e.g., error handling)
├── views/            # EJS templates (layouts, includes, pages)
│
├── app.js            # Application entry point
├── cloudConfig.js    # Cloudinary configuration
├── middleware.js     # Custom middleware (auth checks, validation)
├── schema.js         # Joi validation schemas
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v24.13.1 as specified in `package.json`)
- A [MongoDB](https://www.mongodb.com/) database (local or MongoDB Atlas)
- A [Cloudinary](https://cloudinary.com/) account (for image uploads)
- A [Mapbox](https://www.mapbox.com/) account (for maps and geocoding)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sakshi-saindane03/StayNest.git
   ```

2. **Go to the project folder**

   ```bash
   cd StayNest
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory and add your credentials:

   ```env
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_access_token
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   ```

   > Variable names must match the ones used in your `app.js` and `cloudConfig.js`. Never commit your `.env` file.

5. **(Optional) Seed the database with sample listings**

   ```bash
   node init/index.js
   ```

6. **Start the server**

   ```bash
   node app.js
   ```

7. Open your browser and visit **http://localhost:8080/listings**

---

## 📌 Routes

| Operation         | Method | Route                | Access          |
| ----------------- | ------ | -------------------- | --------------- |
| View all listings | GET    | `/listings`          | Public          |
| New listing form  | GET    | `/listings/new`      | Logged-in users |
| View listing      | GET    | `/listings/:id`      | Public          |
| Create listing    | POST   | `/listings`          | Logged-in users |
| Edit form         | GET    | `/listings/:id/edit` | Listing owner   |
| Update listing    | PUT    | `/listings/:id`      | Listing owner   |
| Delete listing    | DELETE | `/listings/:id`      | Listing owner   |

---

## 🔮 Future Improvements

- Booking functionality
- Wishlist / favorites
- Date-based availability and pricing
- Host dashboard

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the repository and open a pull request.

---

## 👩‍💻 Author

**Sakshi Saindane**

- GitHub: [@sakshi-saindane03](https://github.com/sakshi-saindane03)

Built as part of my journey to learn and build full-stack web applications.