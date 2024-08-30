import backendInstance from "./axios";

async function summaryJD(file: File) {
  try {
    const formData = new FormData();

    formData.append("jd", file);

    const res = await backendInstance.post("/jd/summary", formData);

    return res;
  } catch (error) {
    throw error;
  }
}

const AIService = {
  summaryJD,
};

export default AIService;
