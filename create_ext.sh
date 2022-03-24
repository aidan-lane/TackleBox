rm build -rf

mkdir build
mkdir build/backend
cp frontend/* build/ -r
cp backend/* build/backend/ -r

cd build
zip -r TackleBox.zip .
mv TackleBox.zip ../