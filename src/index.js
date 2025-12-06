import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import rfpsRouter from "./routes/rfps.js";
import vendorsRouter from "./routes/vendors.js";
import sendRouter from "./routes/send.js";
import emailInboundRouter from "./routes/emailInbound.js";
import testRouter from "./routes/test.js";

const app = express();
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/rfps", rfpsRouter);
app.use("/api/vendors", vendorsRouter);
app.use("/api/send", sendRouter);
app.use("/api/email", emailInboundRouter);
app.use("/api/test", testRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`RFP backend listening on port ${port}`);
});
