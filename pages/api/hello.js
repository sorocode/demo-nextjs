/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns a simple greeting message
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello from Next.js!"
 */

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Hello from API!" });
  } else if (req.method === "POST") {
    const { input } = req.body;
    res.status(200).json({ message: `You sent: ${input}` });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
