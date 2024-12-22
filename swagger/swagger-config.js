const swaggerDefinition = {
  openapi: "3.0.0", // OpenAPI 버전
  info: {
    title: "Next.js API Documentation", // 문서 제목
    version: "1.0.0", // API 버전
    description: "This is the API documentation for the Next.js project.", // 문서 설명
  },
  servers: [
    {
      url: "http://localhost:3000", // API 서버 URL
      description: "Local server",
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./pages/api/*.js"], // Swagger 주석이 포함된 API 파일 경로
};

export default swaggerOptions;
