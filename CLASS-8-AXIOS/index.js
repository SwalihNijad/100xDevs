const axios = require("axios")

async function main() {
    const response = await axios(
        {
            url: "https:\\google.com",
            method: "POST",
            headers: {
                Authorization: "Bearer 123",
            },
            data: {
                username: "Harkirat";
            }
        }
    );
    console.log(response.data);
}

main(); 