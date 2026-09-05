import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  Auth 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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
    default:
      return error.message || 'Authentication clearance denied.';
  }
}
