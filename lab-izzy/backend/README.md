#Single-Resource-Mongo

# how to install mongoose
# npm i -S mongoose after typing brew install mongodb(on mac)

# how to start the server
# include start-db and stop-db in scripts of package.json
# for start-db type in mkdir -p ./db && mongod --dbpath ./db
# for stop-db type in killall mongod

# before writing your routes, write the shell for your first test
# then document the routes in your router.js file, one each for POST, PUT, GET & DELETE
# test and write route requests one at a time, get one passing, write the next one

# came up with two models, blog and post, that have a one to many relationship, and used mongoose to create the first resource in the one to many relationship

# added and implemented pagenation
