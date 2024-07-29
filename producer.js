import {connect} from "amqplib";

const connection = await connect("amqp://localhost:5672");
const channel = await connection.createChannel()

for (let i = 0; i < 10; i++) {
    channel.publish("notification", "sms", Buffer.from(`Ini adalah sms ke ${i}`), {
        headers: {
            'key': 'value'
        }
    })
}

await channel.close()
await connection.close()