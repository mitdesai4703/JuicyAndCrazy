import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";

import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { stripeWebhooks } from "./controllers/orderController.js";

const app = express();
const port = process.env.PORT || 4000;

app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

(async () => {
  try {
    await connectDB();
    await connectCloudinary();

    const allowedOrigins = [
      "http://localhost:5173",
      "https://juicy-and-crazy.vercel.app",
    ];

    app.use((req, res, next) => {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://juicy-and-crazy.vercel.app",
      ];
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
      }
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,DELETE,OPTIONS"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type,Authorization"
      );
      next();
    });

    app.use(express.json());
    app.use(cookieParser());

    app.get("/", (req, res) => res.send("API is Working"));

    app.use("/api/user", userRouter);
    app.use("/api/seller", sellerRouter);
    app.use("/api/product", productRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/address", addressRouter);
    app.use("/api/order", orderRouter);

    app.listen(port, () => {
      console.log(` Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(" Failed to start server:", error);
    process.exit(1);
  }
})();
