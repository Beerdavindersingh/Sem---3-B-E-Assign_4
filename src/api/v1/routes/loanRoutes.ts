import express, { Router } from "express";
import * as loanController from "../controllers/loanController";
 
const router: Router = express.Router();
 
//Create a loan
router.post("/", loanController.createLoan);
 
//List all loans
router.get("/", loanController.getAllLoans);
 
//Review a specific loan
router.post("/:id/review", loanController.reviewLoan);
 
//Approve a specfic loan
router.put("/:id/approve", loanController.approveLoan);
 
export default router;