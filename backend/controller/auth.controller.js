export const signup = (req, res) => {
    console.log("Signup user");
    res.send("User signed up!");
};

export const login = (req, res) => {
    console.log("Login user");
    res.send("User logged in!");
};

export const logout = (req, res) => {
    console.log("Logout user");
    res.send("User logged out!");
};
