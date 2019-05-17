


export const schema: JsonSchema = {
    type: 'object',
    required: [
        'name'
    ]
}


export const handler: Handler = async ({ body: { name }}) => {
    // throw new Error('ho no!')
    return {
        body: {
            message: `ciaoo ${name}`
        },
        status: 200,
    }
}
