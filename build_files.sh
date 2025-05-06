#!/bin/bash

# Ensure pip is installed
python3.9 -m ensurepip --upgrade

# Install dependencies
python3.9 -m pip install -r requirements.txt

# Collect static files
python3.9 manage.py collectstatic --noinput
