import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../../swagger/swagger-config"; // 설정 파일 가져오기
import { createServer } from "http";

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default function handler(req, res) {
  if (req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(swaggerSpec);
  } else {
    res.status(405).send({ message: "Method Not Allowed" });
  }
}

export const config = {
  api: {
    externalResolver: true, // Swagger UI 렌더링을 위한 설정
  },
};
