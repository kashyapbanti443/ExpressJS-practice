const mongoose = require("mongoose");
const dns = require("node:dns");

const configuredDnsServers = process.env.MONGODB_DNS_SERVERS
  ?.split(",")
  .map((server) => server.trim())
  .filter(Boolean);

if (configuredDnsServers?.length) {
  dns.setServers(configuredDnsServers);
}

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log(`Database connected successfully: ${mongoose.connection.name}`);
};

module.exports = connectDB;
