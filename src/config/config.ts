export default {
    webApiServer: {
        baseUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3333'
            : 'https://simple-budget-web-api-server.herokuapp.com'
    }
}