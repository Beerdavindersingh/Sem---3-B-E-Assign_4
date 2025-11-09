import {Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
 
/**
* Create a new loan application
* @param req - Express Request object
* @param res - Express Response used
* @param next - Express NextFunction to forward any errors
*/
export const createLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(HTTP_STATUS.CREATED).json({
            status: "approved",
            message: "Your loan application has been created successfully.",
            loanData: {
                id: "1001",
                name: "Tom",
                amount: 18000,
            },
        });
    } catch (error: unknown) {
        next(error);
    }
};
 
/**
* Retrieve all loan applications
* @param req - Express Request object
* @param res - Express Response used to send the result
* @param next - Express nextFucntion to forward any errors
*/
export const getAllLoans = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(HTTP_STATUS.OK).json({
            status: "all loans",
            message: "All loan applications retrieved.",
            loanData: [
                { id: "1002", name: "Jerry", amount: 14000 },
                { id: "1003", name: "Oggy", amount: 30000 },
            ],
        });
    } catch (error: unknown) {
        next(error);
    }
};
 
/**
* A specific loan application in review
* @param req - Express request object
* @param res - Express response used 
* @param next - Express next function used to foward errors
*/
export const reviewLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(HTTP_STATUS.OK).json({
            status: "pending review",
            message: "Your loan is currently under manual review.",
            loanData: {
                id: "1007",
                name: "Jack",
                amount: 12500,
            },
        });
    } catch (error: unknown) {
        next(error);
    }
};
 
/**
* Approve a specific loan application
* @param req - Express request object
* @param res - Express Response used
* @param next- Express nextFucntion to forward any errors
*/
export const approveLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(HTTP_STATUS.OK).json({
            status: "approved",
            message: "Your loan is aprroved",
            loanData: {
                id: "1009",
                name: "Ben",
                amount: 26000,
            },
        });
    } catch (error: unknown) {
        next(error);
    }
};