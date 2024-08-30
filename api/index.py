from flask import Flask, request
from flask_cors import CORS
from langchain_community.document_loaders import PyPDFLoader
from tempfile import NamedTemporaryFile


app = Flask(__name__)
CORS(app)


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
        pages = loader.load_and_split()

    return str(pages[0])


if __name__ == "__main__":
    app.run(port=5328)
