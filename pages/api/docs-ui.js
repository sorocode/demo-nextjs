import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../../swagger/swagger-config"; // 설정 파일 가져오기

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default function handler(req, res) {
  const swaggerHandler = swaggerUi.setup(swaggerSpec);
  swaggerHandler(req, res);
}

export const config = {
  api: {
    externalResolver: true,
  },
};
