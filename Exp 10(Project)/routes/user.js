const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl} = require("../middleware.js")

//GET REQUEST for signup page
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
})


//POST REQUEST for signup page
router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);

        //Till now user got signed up , not let make him auto logged in as per the correct flow of websites, it means the newly registered user will be auto. logged in
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust!");
            res.redirect("/listings");
        })

    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup")
    }

}))

//GET REQUEST for login page
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
})

//POST REQUEST for login page

//here passport.authenticate will entirely self manage whether the user loggining in is new or already registered user,below passport.authenticate is passes as a middleware
router.post("/login",saveRedirectUrl,passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), async (req, res) => {
    req.flash("success", `WELCOME BACK ${req.user.username }, YOU ARE LOGGED IN SUCCESSFULLY`);
    let redirectUrl = res.locals.redirectUrl;
    if(redirectUrl){
        res.redirect(redirectUrl); 
    }
    else{
        res.redirect("/listings")
    }
   
})

//LOG OUT ALA ROUTE
// req.logout id also from passport that handle user logout process all by self

router.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "LOGGED OUT SUCCESSFULLY!");
        res.redirect("/listings");
    })
})

module.exports = router;