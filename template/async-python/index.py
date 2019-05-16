# Copyright (c) Alex Ellis 2017. All rights reserved.
# Licensed under the MIT license. See LICENSE file in the project root for full license information.


from function import handler
from sanic import Sanic, response
import fastjsonschema


app = Sanic()


if getattr(handler, 'schema', None):
        validate = fastjsonschema.compile(handler.schema)
else:
        validate = None



@app.route("/", methods=["POST", "GET"])
async def main_route(req):
    try:
        data = req.json
        validate and validate(data)
        ret = await handler.handle(**data)
        body = ret['body'] if 'body' in ret else {}
        headers = ret['headers'] if 'headers' in ret else None
        status = ret['status'] if 'status' in ret else 200
        return response.json(body, status, headers, indent=4)
    except Exception as e:
        return response.json({'error': str(e)}, 500, indent=4)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
