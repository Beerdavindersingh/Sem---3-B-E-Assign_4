import express, { Router } from "express";
import * as loanController from "../controllers/loanController";
import authenticate from "../middleware/authenticate";
 
const router: Router = express.Router();
 
//Create a loan
router.post("/",
    authenticate,
    loanController.createLoan);
 
//List all loans
router.get("/",
    authenticate,
    loanController.getAllLoans);
 
//Review a specific loan
router.post("/:id/review",
    authenticate,
    loanController.reviewLoan);
 
//Approve a specfic loan
router.put("/:id/approve",authenticate, loanController.approveLoan);
 
export default router;