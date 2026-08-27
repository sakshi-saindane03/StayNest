class ExpressError extends Error {
    constructor(statusCode, message){
        super();
        this.statusCodeCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;