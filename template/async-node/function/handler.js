

module.exports = async ({ body: { name }}) => {
    // throw new Error('ho no!')
    return {
        body: {
            message: `ciaoo ${name}`
        },
        status: 200,
    }
}
