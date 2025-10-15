class ServerError extends Error {
    constructor(status, message) {
        super(message)
        this.status = typeof status === 'number' ? status : parseInt(status, 10)
    }
}

export default ServerError