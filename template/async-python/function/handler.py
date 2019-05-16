

schema = {
    'required': [
        'name',
        'surname',
    ]
}



async def handle(body, path, query):

    return {
        'status': 200,
        'body': {
            'message': f'ciao {body.name} {body.surname}!'
        }
    }
