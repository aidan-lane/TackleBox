rm -rf build

mkdir build
mkdir build/backend
cp -r frontend/* build/
cp -r backend/* build/backend/

cd build
zip -r TackleBox.zip .
mv TackleBox.zip ../
