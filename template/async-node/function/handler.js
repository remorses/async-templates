


module.exports.schema = {
    type: 'object',
    required: [
        'name'
    ]
}


module.exports.handler = async ({ body: { name }}) => {
    // throw new Error('ho no!')
    return {
        body: {
            message: `ciaoo ${name}`
        },
        status: 200,
    }
}
