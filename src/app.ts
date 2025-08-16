import express, { Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import router from './app/routes';
import fileUpload from 'express-fileupload';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFoundRoute';
import cookieParser from 'cookie-parser';
import envVars from './app/config/env';
import expressSession from 'express-session';

const app = express();

// CORS configuration (proper dynamic origin checking)
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://tabstartup.com',
  'https://www.tabstartup.com',
  'https://portal.tabstartup.com',
];

// Cors Allow Options
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow server-to-server

    const isAllowed = allowedOrigins.some(
      (allowed) =>
        origin.startsWith(allowed.replace('www.', '')) || origin === allowed,
    );

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Secure and flexible session setup
app.use(
  expressSession({
    secret: envVars.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: envVars.NODE_ENV === 'production',
      sameSite: envVars.NODE_ENV === 'production' ? 'none' : 'lax',
    },
  }),
);

// API Routes
app.use('/api/v1', router);

//  Test route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: 'Tab Startup server running',
    time: new Date(),
  });
});

// Error Handling
app.use(globalErrorHandler);
app.use(notFound);

export default app;
