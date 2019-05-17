

schema = {
    'required': [
        'name',
        'surname',
    ]
}



async def handle(name, surname):
    return {
        'status': 200,
        'body': {
            'message': f'ciao {name} {surname}!'
        },
        'headers': {
            'Ciaooo': 'adsf.com'
        }
    }
