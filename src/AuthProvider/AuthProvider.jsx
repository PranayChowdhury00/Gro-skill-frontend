import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase";

// Create the context
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to create new user with email and password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Function to sign in user with email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Function to sign out the user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Google login function
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Keep track of user authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Set the user after authentication state change
            setLoading(false); // Stop loading after user state is updated
        });
        return unsubscribe;
    }, []);

    // Context value to share across the application
    const authInfo = {
        user,
        loading,
        setLoading,
        createNewUser,
        signInUser,
        signOutUser,
        googleLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
