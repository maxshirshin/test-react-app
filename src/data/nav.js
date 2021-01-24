export default async function getNav() {
    return fetch("https://run.mocky.io/v3/8ef098ca-8b25-42fb-8c8f-376b31bd9b28?mocky-delay=1000ms")
        .then(r => r.json());
}
