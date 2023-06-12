import { type NextFunction, type Request, type Response } from 'express'
import httpStatus from 'http-status'

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error(err.stack, req.body)
  res
    .status(
      req.statusCode === undefined || req.statusCode === null
        ? httpStatus.INTERNAL_SERVER_ERROR
        : req.statusCode
    )
    .json({
      message: err.message
    })
}

export default errorHandler
