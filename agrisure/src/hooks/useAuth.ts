import { useState } from "react";

export function useAuth() {

    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("agrisureLoggedIn") === "true"
    );

    const [userEmail, setUserEmail] = useState(
        localStorage.getItem("agrisureEmail") || ""
    );


    function login(email: string) {

        localStorage.setItem(
            "agrisureLoggedIn",
            "true"
        );

        localStorage.setItem(
            "agrisureEmail",
            email
        );

        setIsLoggedIn(true);
        setUserEmail(email);
    }


    function logout() {

        localStorage.removeItem(
            "agrisureLoggedIn"
        );

        localStorage.removeItem(
            "agrisureEmail"
        );

        localStorage.removeItem(
            "agrisureName"
        );

        setIsLoggedIn(false);
        setUserEmail("");
    }


    return {
        isLoggedIn,
        userEmail,
        login,
        logout
    };
}