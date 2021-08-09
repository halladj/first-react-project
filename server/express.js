import express from "express";
import compress from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import devBundle from "./devBundle";
import path from "path";
import Template from "./../template";
import React from "react";
import ReactDOMServer from "react-dom/server";
import MainRouter from "./../client/MainRouter";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/styles";
import theme from "./../client/theme";

const CURRENT_WORKING_DIRECTORY = process.cwd();

const app = express();
devBundle.compile(app);

//serve static file config
app.use("/dist/", express.static(path.join(CURRENT_WORKING_DIRECTORY, "dist")));

//decaring some basic middleware
//express.json()  => is the new body-parser "that parsers the body of encomong reqs"
//express.urlncoded => also used to parse the req body
//cookieParser => parser and set the cookies in req objects
//compress => will try to compress res bodies will req passes through middlewares
//helmet => helps sercuring the app by setting HTTP headers
//cors => to enabel cross-origin resource shring
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());

//MOUNTED THE USERS ROUTES HANDLER HERE
//NOW THEY CAN BE ACCESSED VAI OUR APPLICATION
app.use("/", authRoutes);
app.use("/", userRoutes);
app.get("*", (req, res) => {
  const sheets = new ServerStyleSheets();
  const context = {};
  const markup = ReactDOMServer.renderToString(
    sheets.collect(
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
      </StaticRouter>
    )
  );
  if (context.url) {
    return res.redirect(303, context.url);
  }
  console.log(context);
  const css = sheets.toString();
  res.status(200).send(
    Template({
      markup: markup,
      css: css,
    })
  );
});

//here goes css and markup

//a catch all error handler for the hasAuthorization function from authController
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status("401").json({
      error: err.name + " :" + err.message,
    });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
  }
});

export default app;
