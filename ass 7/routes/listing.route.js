import express from "express"

import {
    addListing,
    getAllListings,
    getSingleListing,
    updateListing,
    updateListingImage,
    deleteListing
} from "../controllers/listing.controllers.js"

import upload from "../middleware/fileUpload.middleware.js"

const router = express.Router()
router.post("/", upload.single("imageName"), addListing)
router.get("/", getAllListings)
router.get("/:id", getSingleListing)
router.put("/:id", updateListing)
router.put("/update-image/:id", upload.single("imageName"), updateListingImage)
router.delete("/:id", deleteListing)

export default router