import { prisma } from "../config/prisma"
import asyncHandler from "express-async-handler"
import ErrorResponse from "../utils/ErrorResponse"
import type { RequestWithCustomQuery } from "../middlewares/requestQueryBuilder"
import { populate } from "../utils/populate"

// @desc    Fetch all planets
// @route   GET /api/v1/planets
// @access  Public

export const getPlanets = asyncHandler(async (req: RequestWithCustomQuery, res, next) => {
  const { include } = req.query

  const planets = await prisma.planet.findMany({
    ...req.customQuery,
    include: typeof include === "string" ? populate(include) : undefined,
  })

  if (!planets) {
    return next(new ErrorResponse("No planets found", 404))
  }

  res.status(200).json(planets)
})

// @desc    Fetch single planet
// @route   GET /api/v1/planets/:id
// @access  Public
export const getPlanetById = asyncHandler(async (req, res, next) => {
  const { include } = req.query

  const planet = await prisma.planet.findUnique({
    where: {
      id: req.params.id,
    },
    include: typeof include === "string" ? populate(include) : undefined,
  })

  if (!planet) {
    return next(new ErrorResponse(`Planet with id ${req.params.id} not found`, 404))
  }

  res.status(200).json(planet)
})
