const amqp = require("amqplib"); // Cung cấp một API cho nodejs để gửi và nhận thôn điệp qua rabbitmq

let rabbitMQConnection = null;

const connectToRabbitMQ = async () => {
    console.time("rabbit");
    try {
        rabbitMQConnection = await amqp.connect({
            hostname: "rabbitmq",
            port: 5672,
            heartbeat: 60,
        });
        console.log("Connected to RabbitMQ");
    } catch (err) {
        console.log("Error connecting to RabbitMQ:", err);
    }
    console.timeEnd("rabbit");
};

const getRabbitMQConnection = () => {
    return rabbitMQConnection;
};

module.exports = { connectToRabbitMQ, getRabbitMQConnection };