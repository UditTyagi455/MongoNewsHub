import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";
import { Topics } from "../models/topic.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";


const getTopics = asyncHandler(async (req,res) => {
    // const topics = [
    //     {
    //       id: 1,
    //       topic: "National",
    //       interested: false
    //     },
    //     {
    //       id: 2,
    //       topic: "International",
    //       interested: false
    //     },
    //     {
    //       id: 3,
    //       topic: "Sport",
    //       interested: false
    //     },
    //     {
    //       id: 4,
    //       topic: "Lifestyle",
    //       interested: false
    //     },
    //     {
    //       id: 5,
    //       topic: "Business",
    //       interested: false
    //     },
    //     {
    //       id: 6,
    //       topic: "Health",
    //       interested: false
    //     },
    //     {
    //       id: 7,
    //       topic: "Fashion",
    //       interested: false
    //     },
    //     {
    //       id: 8,
    //       topic: "Technology",
    //       interested: false
    //     },
    //     {
    //       id: 9,
    //       topic: "Science",
    //       interested: false
    //     },
    //     {
    //       id: 10,
    //       topic: "Art",
    //       interested: false
    //     },
    //     {
    //       id: 11,
    //       topic: "Poltics",
    //       interested: false
    //     }
    //   ]

    const fields = await Topics.find();

      return res
      .status(200)
      .json(
        new ApiResponse(200,fields,"All Topics")
      )
});

const addTopics = asyncHandler(async (req,res) => {
    const {topic,interested} = req.body;

    if(!topic){
        throw new ApiError(400,"topic field missing!")
    }

    const topics = await Topics.create({
        topic: topic,
        interested: interested || false
    });

    console.log("topics ::",topics);

    if(!topics){
        throw new ApiError(400,"topics not created!")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,topics,"topic created successfully!")
    )
})



export {
    getTopics,
    addTopics
}