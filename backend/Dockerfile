# 基本イメージ
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

# requirements.txtをコピー
COPY requirements.txt /app/

# requirements.txtをインストール
RUN pip install --no-cache-dir -r /app/requirements.txt

# アプリケーションのコードをコピー
COPY ./app /app


# # Firebase設定ファイルをコピー
# COPY path/to/serviceAccountKey.json /app/path/to/serviceAccountKey.json