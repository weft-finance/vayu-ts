#!/bin/bash

# Directory path
directory_path="./open-api-files"

# File name within the directory
file_name="open-api-v2.json"

# Output directory
output_directory="./openapi-v2"

# Check if the directory exists
if [[ ! -d "$directory_path" ]]; then
    echo "Directory '$directory_path' does not exist."
    exit 1
fi

# Check if the file exists within the directory
if [[ ! -f "$directory_path/$file_name" ]]; then
    echo "File '$file_name' does not exist in directory '$directory_path'."
    exit 1
fi

if [[ -d "$output_directory" ]]; then
    rm -rf ${output_directory}
fi

echo "Generating TS client for openapi"

yes | npx @openapitools/openapi-generator-cli generate \
  -g typescript \
  --additional-properties="prependFormOrBodyParameters=true,disallowAdditionalPropertiesIfNotPresent=false,platform=node,npmName=$(basename ${output_directory})" \
  -o ${output_directory} \
  -i ${directory_path}/${file_name}
rm -rf ${output_directory}/test
rm -rf ${output_directory}/README.md
rm -rf ${output_directory}/git_push.sh
rm -rf ${output_directory}/.travis
rm -rf ${output_directory}/.openapi-generator
rm -rf ${output_directory}/docs
rm -rf ${output_directory}/*.md

echo "Generated TS client for openapi"