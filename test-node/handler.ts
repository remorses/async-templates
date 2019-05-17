


export const schema = {
    type: 'object',
    required: [
        'name'
    ]
}


export const handler = async ({ body: { name }}) => {
    // throw new Error('ho no!')
    return {
        body: {
            message: `ciaoo ${name}`
        },
        status: 200,
    }
}
