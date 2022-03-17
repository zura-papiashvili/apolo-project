const Koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");
var Router = require("koa-router");
const { typeDefs } = require("./src/typeDefs");
const { resolvers } = require("./src/resolvers");

const { connectDB } = require('./src/db')

const app = new Koa();
connectDB()

var router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = '<a href="http://localhost:3003/graphql">my api</a>';
});

module.exports = app;

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use(router.routes()).use(router.allowedMethods());
  app.listen(3003, () => {
    console.log(` 🚀 Server is running at http://localhost:${3003}/graphql `);
  });
}
start();
