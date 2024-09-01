from tempfile import NamedTemporaryFile

import PyPDF2
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS
from transformers import BartForConditionalGeneration, BartTokenizer
from werkzeug.datastructures import FileStorage

load_dotenv()

app = Flask(__name__)
CORS(app)

cache_dir = "./api/model"


def extract_text_from_pdf(file: FileStorage):
    with NamedTemporaryFile() as temp:
        file.save(temp)
        temp.seek(0)
        reader = PyPDF2.PdfReader(temp.name)
        text = ""
        for page in range(len(reader.pages)):
            text += reader.pages[page].extract_text()
    return text


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

    jd_content = extract_text_from_pdf(jd_file)

    tokenizer = BartTokenizer.from_pretrained(
        "facebook/bart-large-cnn", cache_dir=cache_dir
    )
    model = BartForConditionalGeneration.from_pretrained(
        "facebook/bart-large-cnn", cache_dir=cache_dir
    )

    inputs = tokenizer.encode(
        jd_content, return_tensors="pt", max_length=4096, truncation=True
    )
    summary_ids = model.generate(
        inputs,
        max_length=1000,
        min_length=150,
        length_penalty=2.0,
        num_beams=4,
        early_stopping=True,
    )
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary


if __name__ == "__main__":
    app.run(port=5328)
