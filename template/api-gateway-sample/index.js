module.exports.hello = async (e) => {
    return {
        statusCode: 200,
        body: `Hello, ${e.body}`,
    }
};
