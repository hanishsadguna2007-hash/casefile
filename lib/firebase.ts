import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  Auth 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyDQMsejlMSm9YLlpouRi4E12JnIutSriiA',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'casefile-d10b3.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'casefile-d10b3',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'casefile-d10b3.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '987014197296',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:987014197296:web:173f8c73bbb2c8d5997df5',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-6X80HXQNL7',
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.projectId &&
  !firebaseConfig.apiKey.includes('your_api_key')
);

// Initialize Firebase App singleton
export const app: FirebaseApp | null = isFirebaseConfigured
  ? (getApps().length > 0 ? getApp() : initializeApp(firebaseConfig))
  : null;

// Initialize Firebase Auth singleton
export const auth: Auth | null = app ? getAuth(app) : null;

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Friendly error message translator for Firebase Auth codes
export function getFirebaseErrorMessage(error: any): string {
  if (!error) return 'An unexpected error occurred.';
  const code = error.code || '';
  
  switch (code) {
    case 'auth/invalid-email':
      return 'Invalid badge ID or email format.';
    case 'auth/user-disabled':
      return 'This investigator clearance has been deactivated.';
    case 'auth/user-not-found':
      return 'No investigator dossier found with this email.';
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid security pass code or credentials.';
    case 'auth/email-already-in-use':
      return 'This email is already registered to an active dossier. Please sign in.';
    case 'auth/weak-password':
      return 'Passcode is too weak. Must contain at least 6 characters.';
    case 'auth/popup-closed-by-user':
      return 'Google authentication popup was cancelled.';
    case 'auth/popup-blocked':
      return 'Authentication window was blocked by browser. Please allow popups.';
    case 'auth/network-request-failed':
      return 'Network communication failure. Please check connection.';
    case 'auth/too-many-requests':
      return 'Access temporarily blocked due to unusual activity. Try again later.';
    case 'auth/operation-not-allowed':
      return 'This sign-in method is not enabled yet in Firebase Console (enable Email/Password or Google).';
    case 'auth/unauthorized-domain':
      return 'Domain not authorized in Firebase. Please add your Vercel domain to Firebase Console -> Authentication -> Settings -> Authorized Domains.';
    default:
      return error.message || 'Authentication clearance denied.';
  }
}
