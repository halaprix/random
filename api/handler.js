function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function handler(request, response) {
  response.status(200).json({
    body: getRandomInt(100),
  });
}
