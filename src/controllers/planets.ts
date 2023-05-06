import { prisma } from "../config/prisma"
import asyncHandler from "express-async-handler"
import ErrorResponse from "../utils/ErrorResponse"
import type { RequestWithCustomQuery } from "../middlewares/requestQueryBuilder"
import { populate } from "../utils/populate"
import z from "zod"

const planetValidator = z.object({
  name: z.string(),
  distanceFromStar: z.number().optional(),
  mass: z.number().optional(),
  oribitalPeriod: z.number().optional(),
  diameter: z.number().optional(),
  moons: z.number().optional(),
  hasRings: z.boolean().optional(),
  minTemperature: z.number().optional(),
  maxTemperature: z.number().optional(),
  atmosphere: z.string().optional(),
  details: z.object({
    density: z.number().optional(),
    surfaceGravity: z.number().optional(),
    escapeVelocity: z.number().optional(),
    rotationPeriod: z.number().optional(),
    firstRecorded: z.string().optional(),
    recordedBy: z.string().optional(),
  }).optional(),
})


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

// @desc    Create new planet
// @route   POST /api/v1/planets
// @access  Temporarily Public
export const createPlanet = asyncHandler(async (req, res, next) => {

  const validatedData = planetValidator.safeParse(req.body)

  console.log(req.body);

  if(!validatedData.success) {
    const errorMsg = validatedData.error.issues.map((issue) => `${issue.path}: ${issue.message}`).join(" | ")
    return next(new ErrorResponse(errorMsg, 400))
  }

  console.log(validatedData);

  const planetData = validatedData.data

  const planet = await prisma.planet.create({
    data: {
      ...planetData,
      details: planetData.details ? { create: planetData.details } : {
        create:true
      },
    }
  })

  if(!planet) {
    return next(new ErrorResponse("Planet could not be created", 400))
  }

  res.status(201).json(planet)
})
