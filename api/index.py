from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS
from langchain_community.document_loaders import PyPDFLoader
from tempfile import NamedTemporaryFile
from langchain_core.pydantic_v1 import SecretStr
from langchain_openai import OpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

openai_api_key = os.getenv("OPENAI_API_KEY")


@app.route("/api", methods=["GET"])
def hello_world():
    return "Hello, World!"


@app.route("/api/jd/summary", methods=["POST"])
def jd_summary():
    if "jd" not in request.files:
        return "No file part", 400

    jd_file = request.files["jd"]

    if jd_file.filename == "":
        return "No selected file", 400

    with NamedTemporaryFile() as temp:
        jd_file.save(temp)
        temp.seek(0)
        loader = PyPDFLoader(temp.name)
        pages = loader.load()

    if openai_api_key is not None:
        api_key = SecretStr(openai_api_key)

        llm = OpenAI(api_key=api_key)

        prompt = ChatPromptTemplate.from_template("Summarize this content: {context}")

        chain = create_stuff_documents_chain(llm, prompt)

        result = chain.invoke({"context": pages})

        return result
    else:
        return "", 500


if __name__ == "__main__":
    app.run(port=5328)
