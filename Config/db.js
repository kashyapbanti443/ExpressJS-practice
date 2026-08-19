
const mongoose = require("mongoose");
const dns = require("node:dns");

// Some public/institute Wi-Fi DNS resolvers reject MongoDB Atlas SRV lookups.
// Use reliable public resolvers for the mongodb+srv:// URI when configured.
const configuredDnsServers = process.env.MONGODB_DNS_SERVERS
    ?.split(",")
    .map((server) => server.trim())
    .filter(Boolean);

if (configuredDnsServers?.length) {
    dns.setServers(configuredDnsServers);
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw error;
    }
};

module.exports = connectDB;



