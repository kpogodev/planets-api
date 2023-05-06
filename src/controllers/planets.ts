import { prisma } from "../config/prisma"
import asyncHandler from "express-async-handler"
import ErrorResponse from "../utils/ErrorResponse"
import type { RequestWithCustomQuery } from "../middlewares/requestQueryBuilder"

// @desc    Fetch all planets
// @route   GET /api/v1/planets
// @access  Public

export const getPlanets = asyncHandler(async (req: RequestWithCustomQuery, res, next) => {
  const planets = await prisma.planet.findMany({ ...req.customQuery })

  if (!planets) {
    return next(new ErrorResponse("No planets found", 404))
  }

  res.status(200).json(planets)
})
