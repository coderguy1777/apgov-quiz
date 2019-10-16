#!/bin/sh
git add git_upload.sh index.html q_1.html q_2.html q_3.html q_4.html q_5.html quiz-scripts styles
COMMIT_M=0
echo "TYPE GIT COMMIT MESSAGE"
read COMMIT_M
git commit -m "$COMMIT_M"
git push
exit 0
