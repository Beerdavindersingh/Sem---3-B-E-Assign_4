import { Request, Response, NextFunction} from "express";
import { HTTP_STATUS } from "../src/constants/httpConstants";
import * as loanController from "../src/api/v1/controllers/loanController";


describe("Loan Controller", () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let mockNext: NextFunction;

    // Reusable mocks for controller tests
    beforeEach(() => {
        jest.clearAllMocks();

        mockReq = { params: {}, body: {} };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
    });

    // Test for create loan
    describe("createLoan", () => {
    it("should successfully create a loan", async () => {
        await loanController.createLoan(
            mockReq as Request,
            mockRes as Response,
            mockNext
        );

        expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.CREATED);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: "approved",
            message: "Your loan application has been created successfully.",
            loanData: {
                id: "1001",
                name: "Tom",
                amount: 18000,
            },
        });
        expect(mockNext).not.toHaveBeenCalled();
    });
});

    //Test to get all loans
    describe("getAllLoans", () => {
    it("should successfully return all loans", async () => {
        await loanController.getAllLoans(
            mockReq as Request,
            mockRes as Response,
            mockNext
        );

        expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: "all loans",
            message: "All loan applications retrieved.",
            loanData: [
                {id: "1002", name: "Jerry", amount: 14000,},
                {id: "1003", name: "Oggy", amount: 30000,},
            ],
        });
        expect(mockNext).not.toHaveBeenCalled();
    });
});

    //Test to review a loan
    describe("reviewLoan", () => {
    it("should successfully review a loan", async () => {
        await loanController.reviewLoan(
            mockReq as Request,
            mockRes as Response,
            mockNext
        );

        expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: "pending review",
            message: "Your loan is currently under manual review.",
            loanData: {
                id: "1007",
                name: "Jack",
                amount: 12500,
            },
        });
        expect(mockNext).not.toHaveBeenCalled();
    });
});

    //Test to approve a loan
    describe("approveLoan", () => {
    it("should successfully approve a loan", async () => {
        await loanController.approveLoan(
            mockReq as Request,
            mockRes as Response,
            mockNext
        );

        expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: "approved",
            message: "Your loan is aprroved",
            loanData: {
                id: "1009",
                name: "Ben",
                amount: 26000,
            },
        });
        expect(mockNext).not.toHaveBeenCalled();
    });
});

});