import type { Request, Response, NextFunction } from "express"

interface QueryParams {
  name?: string
  limit?: number
  skip?: number
  sort?: string
  order?: string
}

interface CustomQuery {
  where?: {
    name?: {
      contains?: string
      mode?: string
    }
  }
  take?: number
  skip?: number
  orderBy?: {
    [key: string]: string
  }
}

export type RequestWithCustomQuery = Request & { customQuery?: CustomQuery}

export const requestQueryBuilder = async (req: RequestWithCustomQuery, res: Response, next: NextFunction) => {
  const { name, limit, sort, order, skip }: QueryParams = req.query

  let customQuery: CustomQuery = {}

  // Search by name
  if (name) {
    customQuery = {
      ...customQuery,
      where: {
        name: {
          contains: name,
        },
      }
    }
  }

  // Pagination
  if (limit) {
    customQuery = {
      ...customQuery,
      take: +limit,
    }
  }

  if (skip) {
    customQuery = {
      ...customQuery,
      skip: +skip,
    }
  }

  // Sorting
  if (order && sort) {
    customQuery = {
      ...customQuery,
      orderBy: {
        [sort]: order,
      },
    }
  }

  req.customQuery = customQuery

  next()
}
