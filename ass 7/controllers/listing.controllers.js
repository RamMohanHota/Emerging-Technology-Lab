import Listing from "../models/listing.model.js"

// a. Add Listing
async function addListing(req, res) {
    try {

        if (!req.file) {
            return res.status(400).send({
                message: "Image file required"
            })
        }

        const newListing = await Listing.create({
            ...req.body,
            imageName: req.file.filename
        })

        res.send(newListing)

    } catch (error) {
        res.status(400).send({
            message: "Listing not created",
            error: error.message
        })
    }
}


// b. Retrieve all listings
async function getAllListings(req, res) {
    try {

        const listings = await Listing.find()

        res.send(listings)

    } catch (error) {
        res.status(500).send({
            message: "Error fetching listings"
        })
    }
}


// c. Retrieve single listing with owner details
async function getSingleListing(req, res) {
    try {

        const listing = await Listing.findById(req.params.id)
            .populate("ownerId")

        res.send(listing)

    } catch (error) {
        res.status(500).send({
            message: "Listing not found"
        })
    }
}


// d. Update listing details (without image)
async function updateListing(req, res) {
    try {
        console.log(req.params.id, req.body);
        
        const listing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        res.send(listing)

    } catch (error) {
        res.status(400).send({
            message: "Listing not updated"
        })
    }
}


// e. Update listing image
async function updateListingImage(req, res) {
    try {

        if (!req.file) {
            return res.status(400).send({
                message: "Image file required"
            })
        }

        const listing = await Listing.findByIdAndUpdate(
            req.params.id,
            { imageName: req.file.filename },
            { new: true }
        )

        res.send(listing)

    } catch (error) {
        res.status(400).send({
            message: "Image not updated"
        })
    }
}


// f. Delete listing
async function deleteListing(req, res) {
    try {

        await Listing.findByIdAndDelete(req.params.id)

        res.send({
            message: "Listing deleted successfully"
        })

    } catch (error) {
        res.status(500).send({
            message: "Listing not deleted"
        })
    }
}

export {
    addListing,
    getAllListings,
    getSingleListing,
    updateListing,
    updateListingImage,
    deleteListing
}