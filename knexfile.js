module.exports = {
		development: {
				client:     'pg',
				connection: 'postgres://localhost/my_life'
		},
		production: {
				client: 'postgresql',
				connection: process.env.DATABASE_URL + '?ssl=true'
		}
}
