class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400
    }
}


export { ApiResponse }



//  1 informational response ( 100 - 199 )

//  2 Succeful response ( 200 - 299 )

//  3 redirection response ( 300 - 399 )

//  4 Client Error response ( 400 - 499 )

//  5 Server Error response ( 500 - 599 )