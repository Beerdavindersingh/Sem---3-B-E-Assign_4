import express, { Router } from "express";
import * as loanController from "../controllers/loanController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { AuthorizationOptions } from "../models/authorizationOptions";
 
const router: Router = express.Router();
 
//Create a loan
router.post("/",
    authenticate,
    isAuthorized({ hasRole: ["admin", "manager", "user"]} as AuthorizationOptions),
    loanController.createLoan);
 
//List all loans
router.get("/",
    authenticate,
    isAuthorized({ hasRole: ["admin", "manager"]} as AuthorizationOptions),
    loanController.getAllLoans);
 
//Review a specific loan
router.post("/:id/review",
    authenticate,
    isAuthorized({ hasRole: ["admin", "manager"]}as AuthorizationOptions),
    loanController.reviewLoan);
 
//Approve a specfic loan
router.put("/:id/approve",
    authenticate, 
    isAuthorized({hasRole: ["admin", "manager"]} as AuthorizationOptions),
    loanController.approveLoan);
 
export default router;