const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js")
//NOTE THAT HERE WE ARE PUTTING DOUBLE DOTS(..) ,AS WE ARE going from routes ali file to its relative parent directory
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js")



//Creating our index route - named listings
router.get("/", wrapAsync(async function (req, res) {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}))
//***In some routes we have passes isLoggedIn is passed as a middlware that will verify that the current user is loggedin or not***
//New Route
router.get("/new", isLoggedIn, function (req, res) {
    res.render("listings/new.ejs")
})


//Show Route
router.get("/:id", wrapAsync(async function (req, res) {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    //below is nested populating
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            }
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Requested Listing Does Not Exist");
        //je exist ni krdi bss listing ale page te vapasa ajo
        res.redirect("/listings");
    }
    else {
        res.render("listings/show.ejs", { listing });
        console.log(listing.owner)

    }

}))

//Create Route
router.post("/", isLoggedIn, validateListing,
    wrapAsync(async function (req, res) {

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;

        await newListing.save();
        req.flash("success", "New Listing Added!");//this is form of (key , value);--Note that flash ala mesg only 1 time aunda bss
        res.redirect("/listings");
    }))

//EDIT ROUTE
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async function (req, res) {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Requested Listing Does Not Exist");
        //je exist ni krdi bss listing ale page te vapasa ajo
        res.redirect("/listings");
    }
    else {
        res.render("listings/edit.ejs", { listing });
    }

}))

//UPDATE ROUTE
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(async function (req, res) {
    let { id } = req.params;

    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);



}))

//DELETE ROUTE
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async function (req, res) {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");

}))

module.exports = router;