


type JsonSchema  = any

interface Result {
    body: any;
    headers?: Object;
    status?: Number;
}

interface RequestBody {
    body: any
    headers: Object
    method: String // "POST" | "GET" | "PUT" | "DELETE" | "PATCH"
    query: String
    path: String
}

type Handler = (body: RequestBody,) => Promise<Result>